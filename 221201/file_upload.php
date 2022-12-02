<?php

 /*print_r($_FILES);

 echo "<br />";

 if($_FILES["file"]["error"]==0 && is_uploaded_file($_FILES["file"]["tmp_name"])&& move_uploaded_file($_FILES["file"]["tmp_name"],"E:/lamp/Apache2.2/htdocs/daer/file/file_upload/".$_FILES["file"]["name"]))// 或者存放地址写成：E:\\lamp\\Apache2.2\\htdocs\\daer\\file\\file_upload\\

 {

  echo "文件上传成功并移动到指定位置";

  }

 */

 

//echo $_FILES["file"]["type"];

 define('MAX_SIZE',200000);

if($_FILES["file"]["error"]>0)

 {

  echo "文件上传失败";

  }

  else

  {

   if($_FILES["file"]["type"]!='image/jpeg' && $_FILES["file"]["type"]!="image/pjpeg")

   {

    echo "<script>alert('图片格式不正确！请重新上传！');history.back();</script>";

   }

  

   else{

    if($_FILES["file"]["size"]>MAX_SIZE)

    {

     echo "<script>alert('文件大小超出范围！');history.back();</script>";

     }

    }

    if(move_uploaded_file($_FILES["file"]["tmp_name"],"E:/lamp/Apache2.2/htdocs/daer/file/file_upload/".date("d-m-y",time()).$_FILES["file"]["name"]))

    echo "文件上传成功";

 

  }

 ?>
