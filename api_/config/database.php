<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Max-Age:3600');
    header('Content-Type: text/html; charset=utf-8');

    set_time_limit(1000);

    // variable and its value
    define('DBASE', 'api');
    define('USER', 'root');
    define('PW', '');
    define('SERVER', 'localhost');
    define('CHARSET', 'utf8');
    
    class connection{
       // inserting the above variables
       protected $constring = "mysql:host=".SERVER.";dbname=".DBASE.";charset=".CHARSET;

        protected $options = [
        \PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        \PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        \PDO::ATTR_EMULATE_PREPARES => false
    ];

    public function connect(){
        return new \PDO($this->constring, USER, PW, $this->options);
    }

    public function checkConnection(){
        try{
            $connection = new \PDO($this->constring, USER, PW, $this->options);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "<script>console.log('Connection Success!');</script>";
        }catch(PDOException $e){
            echo "<script>console.log('Connection Failed!');</script>";
        }
    }
}

?>