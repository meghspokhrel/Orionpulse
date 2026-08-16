import os

from dotenv import load_dotenv

load_dotenv()


GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

ORIONPULSE_MODEL = os.getenv(
    "ORIONPULSE_MODEL",
    "gemini-3.6-flash"
)


if not GEMINI_API_KEY:
    raise RuntimeError("GEMINI_API_KEY is missing.")

if not SUPABASE_URL:
    raise RuntimeError("SUPABASE_URL is missing.")

if not SUPABASE_KEY:
    raise RuntimeError("SUPABASE_KEY is missing.")
