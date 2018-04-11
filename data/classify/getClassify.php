<?php
  header("Content-Type:application/json;charset=utf-8");
  require_once("../init.php");
  $sql="SELECT lg,title FROM dm_product_pic INNER JOIN dm_product ON dm_product_pic.pid=dm_product.pid WHERE lg!=''";
  $result=mysqli_query($conn,$sql);
  echo json_encode(mysqli_fetch_all($result,1));
?>
