<DOCTYPE html>

<html>

<head>
</head>

<body><?php
  $video_array = glob( 'videos/{*.webm}', GLOB_BRACE );
  printArray( $video_array );
?></body>

</html>
