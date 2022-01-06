<?php 

class auth{

    protected $pdo;

    public function __construct(\PDO $pdo){
        $this->pdo = $pdo;
    }
    public function login($data){
        $sql = "SELECT * FROM user_tbl WHERE email = '$data->email' AND password = '$data->password'";

        if($res = $this->pdo->query($sql)->fetchAll()) {
            return array("data"=>array(
                "id"=>$res[0]['id'], 
                "fullname"=>$res[0]['fullname'], 
                "email"=>$res[0]['email'], 
                "contact"=>$res[0]['contact'], 
                "password"=>$res[0]['password'], 
            ));
        } 
        else {
            return array("error"=>"Incorrect username or password");
        }
    }

    public function signup($data){
        $sql = "INSERT INTO user_tbl (fullname,email,contact,password) VALUES ('$data->fullname','$data->email','$data->contact','$data->password')";
        $sql = $this->pdo->prepare($sql);
        $sql->execute([]);
        $count = $sql->rowCount();

        if($count){
            return array("data"=>"insert success!");
        }
        else{
            return array("error"=>"No Record inserted");
        }
    }

    public function update($data){
        $sql = "UPDATE user_tbl SET fullname='$data->fullname', email='$data->email',contact='$data->contact', password='$data->password' WHERE id='$data->id'";
        $sql = $this->pdo->prepare($sql);
        $sql->execute([]);
        $count = $sql->rowCount();
    
        if($count){
            return array("data"=>"Update Success!");
        }
        else{
            return array("error"=>"Update Failed");
        }
    }

    }

?>