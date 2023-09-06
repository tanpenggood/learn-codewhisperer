# Function to verify email address using a regular expression
import re
def is_valid_email(email):
    regex = r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b"
    if (re.fullmatch(regex, email)):
        return True
    else:
        return False