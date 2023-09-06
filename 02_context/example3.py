import boto3

# Create SES client
ses = boto3.client('ses')

# Function to verify email address

def verify_email(email):
    response = ses.verify_email_identity(EmailAddress=email)
    print(response)
