<?php 
require_once("./config/database.php");
require_once("./models/auth.php");

class main{
    protected $db;
    protected $pdo;
    protected $auth;
    

    protected $req = [];

    public function __construct(){
        $this->db = new connection();
        $this->pdo = $this->db->connect();
        $this->auth = new auth($this->pdo);
       // $this->Post = new Post($this->pdo);

        if(isset($_REQUEST['request'])){
            $this->req = explode('/', rtrim($_REQUEST['request'], '/'));
        }else{
            $this->req = array('errorcatcher');
        }

        switch($_SERVER['REQUEST_METHOD']){
            case 'GET':
                switch($this->req[0]){
                    case 'test':
                        echo json_encode($this->db->checkConnection());
                    break;
                }
            break;
            case 'POST':
                switch($this->req[0]){
                    case 'login':
                        $data = json_decode(file_get_contents("php://input"));
                        echo json_encode($this->auth->login($data));
                    break;
                    case 'signup':
                        $data = json_decode(file_get_contents("php://input"));
                        echo json_encode($this->auth->signup($data));
                    break;
                    case 'update':
                        $data = json_decode(file_get_contents("php://input"));
                        echo json_encode($this->auth->update($data));
                    break;
                }    
            break;
        }
    }
}
$run = new main();

?>