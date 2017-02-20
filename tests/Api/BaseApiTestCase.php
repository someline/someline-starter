<?php

namespace Tests\Api;

use Tests\TestCase;
use Lukasoppermann\Httpstatus\Httpstatuscodes;
use Psr\Http\Message\ResponseInterface;
use Someline\Rest\RestClient;

class BaseApiTestCase extends TestCase implements Httpstatuscodes
{

    /**
     * @var RestClient
     */
    private $client;

    /**
     * The last response returned by the application.
     *
     * @var \Illuminate\Http\Response
     */
    protected $response;

    /**
     * The last test response returned by the application.
     *
     * @var \Illuminate\Foundation\Testing\TestResponse
     */
    protected $testResponse;

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
        $this->testResponse = $this->createTestResponse($response);
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

    public function getTestResponse()
    {
        return $this->testResponse;
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

    public function assertResponseOk()
    {
        return $this->assertStatus(self::HTTP_OK);
    }

    public function assertResponseNoContent()
    {
        return $this->assertStatus(self::HTTP_NO_CONTENT);
    }

    public function assertResponseCreated()
    {
        return $this->assertStatus(self::HTTP_CREATED);
    }

    public function assertResponseUnprocessableEntity()
    {
        return $this->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY);
    }

    public function assertResponseUnauthorized()
    {
        return $this->assertStatus(self::HTTP_UNAUTHORIZED);
    }

    public function assertResponseAccessDenied()
    {
        return $this->assertStatus(self::HTTP_FORBIDDEN);
    }

    public function assertStatus($code)
    {
        $response = $this->getTestResponse();
        $response->assertStatus($code);
        return $this;
    }

    public function assertRedirect($uri)
    {
        $response = $this->getTestResponse();
        $response->assertRedirect($uri);
        return $this;
    }

    public function assertHeader($headerName, $value = null)
    {
        $response = $this->getTestResponse();
        $response->assertHeader($headerName, $value);
        return $this;
    }

    public function assertCookie($cookieName, $value = null)
    {
        $response = $this->getTestResponse();
        $response->assertCookie($cookieName, $value);
        return $this;
    }

    public function assertPlainCookie($cookieName, $value = null)
    {
        $response = $this->getTestResponse();
        $response->assertPlainCookie($cookieName, $value);
        return $this;
    }

    public function assertSessionHas($key, $value = null)
    {
        $response = $this->getTestResponse();
        $response->assertSessionHas($key, $value);
        return $this;
    }

    public function assertSessionHasErrors(array $keys)
    {
        $response = $this->getTestResponse();
        $response->assertSessionHasErrors($keys);
        return $this;
    }

    public function assertSessionMissing($key)
    {
        $response = $this->getTestResponse();
        $response->assertSessionMissing($key);
        return $this;
    }

    public function assertJsonContains(array $data)
    {
        $response = $this->getTestResponse();
        $response->assertJson($data);
        return $this;
    }

    public function assertJsonFragment(array $data)
    {
        $response = $this->getTestResponse();
        $response->assertJsonFragment($data);
        return $this;
    }

    public function assertExactJson(array $data)
    {
        $response = $this->getTestResponse();
        $response->assertExactJson($data);
        return $this;
    }

    public function assertJsonStructure(array $structure)
    {
        $response = $this->getTestResponse();
        $response->assertJsonStructure($structure);
        return $this;
    }

    public function assertViewHas($key, $value = null)
    {
        $response = $this->getTestResponse();
        $response->assertViewHas($key, $value);
        return $this;
    }

}