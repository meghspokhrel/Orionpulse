from supabase import create_client

from config import SUPABASE_URL, SUPABASE_KEY


supabase = create_client(
    SUPABASE_URL,
    SUPABASE_KEY
)


def get_framework(framework_code: str):
    response = (
        supabase
        .table("frameworks")
        .select("*")
        .eq("framework_code", framework_code)
        .limit(1)
        .execute()
    )

    if not response.data:
        return None

    return response.data[0]


def get_framework_rules(framework_id: str):
    response = (
        supabase
        .table("framework_rules")
        .select("*")
        .eq("framework_id", framework_id)
        .order("rule_order")
        .execute()
    )

    return response.data


def create_session(session_key: str):
    response = (
        supabase
        .table("agent_sessions")
        .insert({
            "session_key": session_key,
            "model_provider": "google",
            "model_name": "Gemini"
        })
        .execute()
    )

    return response.data[0] if response.data else None
