<!doctype html>
<html>
  <head>

    <!-- fontawesome -->
    <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">

    <!-- jquery -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>

    <!-- bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
    <!-- pagepiling  -->
    <link rel="stylesheet" type="text/css" href="libs/pagePiling/jquery.pagepiling.css" />
    <script type="text/javascript" src="libs/pagePiling/jquery.pagepiling.min.js"></script>
    
    <!-- hover css -->
    <link rel="stylesheet" type="text/css" href="libs/Hover/css/hover.css" />
    
    <title>TLC</title>
  </head>
  <body>



<table class="table table-light tb-mg-10">
				<thead>
					<tr>
					<th scope="col">Транспорт</th>
					<th scope="col">Размеры</th>
					<th scope="col">Описание</th>
					</tr>
				</thead>
				<tbody>
                <?php
                    
                    include '../mainPage/dirWorker.php';

					$dirWorker = new DirWorker;
					$carsImg = $dirWorker->dirFiles('../../assets/cars', '.jpg');

					$path = $_SERVER['DOCUMENT_ROOT'].'/assets/cars_t/';


					foreach ($carsImg as $key => $value) {
							echo '	<tr>
									<th scope="row">
										<img class="table-img" src="../../assets/cars/'. $value .'" />
									</th>
									<td>
									<img class="table-img" src="../../assets/cars_m/'. $value .'" />
									</td>
									<td class="xtr-small">'. file_get_contents( $path. explode('.', $value)[0].'.txt', true) . '</td>
									</tr>
                                ';
                    }
					
				?>
					<!-- <tr>
					<th scope="row">1</th>
					<td>Mark</td>
					<td>Otto</td>
					<td>@mdo</td>
					</tr> -->
				</tbody>
            </table>
            

    <!-- bootstrap cdn -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  
  </body>
</html>