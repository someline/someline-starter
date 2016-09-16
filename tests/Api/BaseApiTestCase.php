<?php

use Lukasoppermann\Httpstatus\Httpstatuscodes;
use Psr\Http\Message\ResponseInterface;
use Someline\Rest\RestClient;

class BaseApiTestCase extends TestCase implements Httpstatuscodes
{

    /**
     * @var RestClient
     */
    private $client;

    public function setUp()
    {
        parent::setUp();

        $this->client = new RestClient('local', true);
        $this->setOAuthRequestData();
    }

    /**
     *  Set OAuth Request Data
     */
    private function setOAuthRequestData()
    {
        return $this->client->setOAuthGrantRequestData(RestClient::GRANT_TYPE_PASSWORD, [
            'username' => env('API_TEST_USERNAME'),
            'password' => env('API_TEST_PASSWORD'),
            'scope' => '*',
        ]);
    }

    /**
     * @param $grant_type
     * @param array|null $requestData
     * @return $this
     */
    public function withOAuthToken($grant_type, $requestData = null)
    {
        $this->withOAuthToken($grant_type, $requestData);
        return $this;
    }

    /**
     * @param array|null $requestData
     * @return RestClient
     */
    public function withOAuthTokenTypePassword($requestData = null)
    {
        $this->client->withOAuthTokenTypePassword($requestData);
        return $this;
    }

    /**
     * @param array|null $requestData
     * @return RestClient
     */
    public function withOAuthTokenTypeClientCredentials($requestData = null)
    {
        $this->client->withOAuthTokenTypeClientCredentials($requestData);
        return $this;
    }

    /**
     * @param array|null $requestData
     * @return RestClient
     */
    public function withOAuthTokenTypeAuthorizationCode($requestData = null)
    {
        $this->client->withOAuthTokenTypeAuthorizationCode($requestData);
        return $this;
    }

    /**
     * @return $this
     */
    public function withoutOAuthToken()
    {
        $this->client->withoutOAuthToken();
        return $this;
    }

    /**
     * @return RestClient
     */
    public function getClient()
    {
        return $this->client;
    }

    /**
     * @param string $uri
     * @param array $query
     * @param array $options
     * @return $this
     */
    public function getApi($uri, array $query = [], array $options = [])
    {
        $response = $this->client->get($uri, $query, $options)->getGuzzleResponse();
        $this->setGuzzleResponse($response);
        return $this;
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $options
     * @return $this
     */
    public function postApi($uri, array $data = [], array $options = [])
    {
        $response = $this->client->post($uri, $data, $options)->getGuzzleResponse();
        $this->setGuzzleResponse($response);
        return $this;
    }

    /**
     * @url http://docs.guzzlephp.org/en/latest/quickstart.html#sending-form-files
     * @param $uri
     * @param array $multipart
     * @param array $options
     * @return $this
     */
    public function postApiMultipart($uri, array $multipart = [], array $options = [])
    {
        $response = $this->client->postMultipart($uri, $multipart, $options)->getGuzzleResponse();
        $this->setGuzzleResponse($response);
        return $this;
    }

    /**
     * @param $uri
     * @param array $data
     * @param array $options
     * @return $this
     */
    public function postApiMultipartSimple($uri, array $data = [], array $options = [])
    {
        $response = $this->client->postMultipartSimple($uri, $data, $options)->getGuzzleResponse();
        $this->setGuzzleResponse($response);
        return $this;
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $options
     * @return $this
     */
    public function headApi($uri, array $data = [], array $options = [])
    {
        $response = $this->client->head($uri, $data, $options)->getGuzzleResponse();
        $this->setGuzzleResponse($response);
        return $this;
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $options
     * @return $this
     */
    public function putApi($uri, array $data = [], array $options = [])
    {
        $response = $this->client->put($uri, $data, $options)->getGuzzleResponse();
        $this->setGuzzleResponse($response);
        return $this;
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $options
     * @return $this
     */
    public function patchApi($uri, array $data = [], array $options = [])
    {
        $response = $this->client->patch($uri, $data, $options)->getGuzzleResponse();
        $this->setGuzzleResponse($response);
        return $this;
    }

    /**
     * @param string $uri
     * @param array $data
     * @param array $options
     * @return $this
     */
    public function deleteApi($uri, array $data = [], array $options = [])
    {
        $response = $this->client->delete($uri, $data, $options)->getGuzzleResponse();
        $this->setGuzzleResponse($response);
        return $this;
    }

    /**
     * @param ResponseInterface $response
     */
    public function setGuzzleResponse(ResponseInterface $response)
    {
        $this->guzzle_response = $response;
        $this->setResponse(new \Illuminate\Http\Response($response->getBody(), $response->getStatusCode(), $response->getHeaders()));
    }

    /**
     * @param \Illuminate\Http\Response $response
     */
    public function setResponse(\Illuminate\Http\Response $response)
    {
        $this->response = $response;
        $statusCode = $this->response->getStatusCode();
        if ($statusCode >= 300) {
            echo "\nResponse STATUS CODE is $statusCode:\n";
            $responseData = $this->getResponseData();
            if ($responseData) {
                print_r($responseData);
            } else {
                echo $this->getResponse();
            }
        }
    }

    public function getResponse()
    {
        return $this->response;
    }

    public function getResponseAsJson($assoc = true)
    {
        return json_decode($this->getResponse()->getContent(), $assoc);
    }

    public function getResponseData()
    {
        return $this->getResponseAsJson();
    }

    public function printResponseData()
    {
        print_r($this->getResponseData());
        return $this;
    }

    public function printResponseOriginContent()
    {
        print_r((string)$this->response->getOriginalContent());
        return $this;
    }

    public function assertResponseNoContent()
    {
        $this->assertResponseStatus(self::HTTP_NO_CONTENT);
    }

    public function assertResponseCreated()
    {
        $this->assertResponseStatus(self::HTTP_CREATED);
    }

    public function assertResponseUnprocessableEntity()
    {
        $this->assertResponseStatus(self::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function assertResponseUnauthorized()
    {
        $this->assertResponseStatus(self::HTTP_UNAUTHORIZED);
    }

    public function assertResponseAccessDenied()
    {
        $this->assertResponseStatus(self::HTTP_FORBIDDEN);
    }

}