import json
class TestProductAPI(TestCase):

    # Path get_projects adn test lambda_handler return a single record
    def test_get_projects_single_record(self):
        event = {'httpMethod': 'GET', 'queryStringParameters': {'id': '1'}}
        result = lambda_handler(event, None)
        self.assertEqual(result['statusCode'], 200)
        self.assertEqual(result['body'], json.dumps(products[0]))


    # Path get_projects adn test lambda_handler return multiple records
    def test_get_projects_multiple_records(self):
        event = {'httpMethod': 'GET', 'queryStringParameters': {'id': '1,2'}}
        result = lambda_handler(event, None)
        self.assertEqual(result['statusCode'], 200)
        self.assertEqual(result['body'], json.dumps(products))
