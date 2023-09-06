import boto3

# Function to query products table using ddb
def get_products():
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('products')
    response = table.scan()
    return response['Items']

# Lambda function to upload an image to S3
def lambda_handler(event, context):
    # Get the products from the database
    products = get_products()
    # Get the image from the event
    image = event['image']
    # Upload the image to S3
    s3 = boto3.client('s3')
    s3.put_object(Bucket='codewhisperer-images', Key=image, Body=image)
    # Return the products
    return products