<?php

    class DirWorker {

        function readFile($pahtToFile, $crop){

            $pahtToFile = explode('.', $pahtToFile)[0].'.txt';
            $file = file_get_contents($pahtToFile, true);
            
            if ($crop == true){
                return mb_strimwidth($file, 0, 105, "...");
            } else {
                return $file;
            }
            
        }


        function dirFiles($path, $format){

            $files = scandir($path);

            $clearArr = [];
            $finalArr = [];

            foreach ($files as $key => $value) {
                if($value == '.' || $value == '..' || is_dir($path . $value)){
                    continue;
                }
                $value = explode('.', $value)[0];
                array_push($clearArr, $value);
            }

            sort($clearArr);

            foreach ($clearArr as $key => $value) {
                $value = $value . $format;
                array_push($finalArr, $value);
            }

            return $finalArr;
            
        }

    }


    