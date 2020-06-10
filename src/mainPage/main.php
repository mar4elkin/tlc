<script type="text/javascript">
		var deleteLog = false;

		$(document).ready(function() {
	    	$('#pagepiling').pagepiling({
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3'],
	    		navigation: {
		            'textColor': '#f2f2f2',
		            'bulletsColor': '#ccc',
		            'position': 'right',
		            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
		        }
			});
	    });
    </script>


    <link rel="stylesheet" type="text/css" href="src/mainPage/main.css" />


<!-- <ul id="menu">
		<li data-menuanchor="page1" class="active"><a href="#page1">Page 1</a></li>
		<li data-menuanchor="page2"><a href="#page2">Page 2</a></li>
		<li data-menuanchor="page3"><a href="#page3">Page 3</a></li>
	</ul> -->

	<div id="pagepiling">
	    <div class="section" id="section1">
            <div style="display:flex; justifyContent: center">
                <Row>

                    <Col className="hvr-grow" onClick={() => fullpageApi.moveTo(3)}> 
                        <h4 style={{display: 'flex', justifyContent: 'center'}}>Таксомоторные перевозки</h4>                    
                        <Image id='item' style={CardImg} src={TaxiCard} rounded  />        
                        
                    </Col>

                    <Col className="hvr-grow" onClick={() => fullpageApi.moveTo(2)}>
                        <h4 style={{display: 'flex', justifyContent: 'center'}}>Перевозка Грузов</h4>
                        <Image id='item' style={CardImg} src={CargoCard} rounded  />     
                        
                    </Col>

                </Row>
            </Container>
	    </div>
	    <div class="section" id="section2">
	    	<div class="intro">
	    		<h1>Backgrounds </h1>
	    		<p>Show it in full screen!</p>
	    	</div>
	    </div>
	    <div class="section" id="section3">
	    	<div class="intro">
	    		<h1>Just terrific!</h1>
	    		<p>Use the power of images</p>
	    	</div>
	    </div>
	</div>