<?php
header("Content-type:application/json;charset=utf-8");
require_once("../init.php");
$output=[];
//$sql="SELECT sm FROM dm_product_pic WHERE sm!=''";
//$output["pic"]=mysqli_fetch_all(mysqli_query($conn,$sql),1);
$sql="SELECT sm,title,detail,showTime,city,venues,price FROM dm_product_pic INNER JOIN dm_product ON dm_product_pic.pid=dm_product.pid WHERE sm!=''";
$output=mysqli_fetch_all(mysqli_query($conn,$sql),1);
echo json_encode($output);
?>