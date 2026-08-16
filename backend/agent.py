from google import genai

from config import GEMINI_API_KEY, ORIONPULSE_MODEL
from database import get_framework, get_framework_rules


client = genai.Client(
    api_key=GEMINI_API_KEY
)


ORIONPULSE_SYSTEM = """
You are OrionPulse AI Advisor.

You are not a generic chatbot.

Your purpose is to help diagnose business problems,
apply validated OrionPulse frameworks,
reason from evidence,
make structured recommendations,
and avoid unsupported conclusions.

Core OrionPulse reasoning architecture:

Information
→ Knowledge
→ Frameworks
→ Reasoning
→ Decisions
→ Actions
→ Results
→ Learning

You must distinguish:

1. Facts
2. Evidence
3. Hypotheses
4. Diagnosis
5. Recommendations
6. Actions

Never present a hypothesis as a confirmed fact.

When evidence is insufficient, explicitly say what
additional information is required.

Never jump directly from a business metric to an
action without diagnosing the underlying cause.
"""


def run_orionpulse(user_message: str):

    framework = get_framework("F-001")

    framework_rules = []

    if framework:
        framework_rules = get_framework_rules(
            framework["id"]
        )

    framework_context = ""

    if framework:
        framework_context += f"""
ACTIVE ORIONPULSE FRAMEWORK

Code:
{framework["framework_code"]}

Name:
{framework["name"]}

Purpose:
{framework["purpose"]}

Trigger:
{framework["trigger"]}

Description:
{framework["description"]}
"""

        framework_context += "\nFRAMEWORK RULES:\n"

        for rule in framework_rules:
            framework_context += f"""
Rule {rule["rule_order"]}:
{rule["rule_name"]}

Type:
{rule["rule_type"]}

Explanation:
{rule["explanation"]}

Guardrail:
{rule["guardrail"]}
"""

    prompt = f"""
{ORIONPULSE_SYSTEM}

{framework_context}

USER REQUEST:

{user_message}

Respond using this structure:

## Understanding

What the user is asking.

## Evidence

What is known versus unknown.

## Diagnosis

Potential causes, ranked by evidence.

## Recommendation

What should be considered next.

## Action

Only recommend an action when the evidence supports it.

## Information Needed

What additional information would improve confidence.
"""

    response = client.models.generate_content(
        model=ORIONPULSE_MODEL,
        contents=prompt
    )

    return response.text
