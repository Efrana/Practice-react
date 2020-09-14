import React, {Component} from 'react'

class Wizard extends Component{
    render(){
        return(
            <div>
                	<div class="wrapper">
            <form action="" id="wizard">
        		
                <h4></h4>
                <section>
                    <div class="inner">
                    	<a href="#" class="avartar">
                    		<img src="images/avartar.png" alt=""/>
                    	</a>
                    	<div class="form-row form-group">
                    		<div class="form-holder">
                    			<input type="text" class="form-control" placeholder="First Name"/>
                    		</div>
                    		<div class="form-holder">
                    			<input type="text" class="form-control" placeholder="Last Name"/>
                    		</div>
                    	</div>
                    	<div class="form-row">
                    		<div class="form-holder">
                    			<input type="password" class="form-control" placeholder="Password"/>
                    			<i class="zmdi zmdi-lock-open small"></i>
                    		</div>
                    	</div>
                    	<div class="form-row">
                    		<div class="form-holder">
                    			<input type="text" class="form-control" placeholder="Email"/>
                    			<i class="zmdi zmdi-email small"></i>
                    		</div>
                    	</div>
                    	<div class="form-row">
                    		<div class="form-holder">
                    			<input type="text" class="form-control" placeholder="Phone"/>
                    			<i class="zmdi zmdi-smartphone-android"></i>
                    		</div>
                    	</div>
                    	<div class="form-row">
                    		<div class="form-holder">
                    			<input type="text" class="form-control" placeholder="Address"/>
                                <i class="zmdi zmdi-map small"></i>
                    		</div>
                    	</div>
                    	<div class="form-row">
                    		<div class="form-holder">
                    			<input type="text" class="form-control" placeholder="Nation"/>
                                <i class="zmdi zmdi-account-box-o small"></i>

                    		</div>
                    	</div>
                    </div>
                </section>
                
			
                <h4></h4>
                <section>
                	<div class="inner">
                		<a href="#" class="avartar">
                    		<img src="images/avartar.png" alt=""/>
                    	</a>
                		<div class="form-row">
                            <div class="select">
                                <div class="form-holder">
                                    <div class="select-control">Gender</div>
                                    <i class="zmdi zmdi-caret-down small"></i>
                                </div>
                                <ul class="dropdown">
                                    <li rel="Male">Male</li>
                                    <li rel="Female">Female</li>
                                    <li rel="Other">Other</li>
                                </ul>
                            </div>
	                	</div>
	                	<div class="form-row">
                            <div class="select">
                                <div class="form-holder">
                                    <div class="select-control">Language</div>
                                    <i class="zmdi zmdi-caret-down small"></i>
                                </div>
                                <ul class="dropdown">
                                    <li rel="English">English</li>
                                    <li rel="France">France</li>
                                    <li rel="Vietnamese">Vietnamese</li>
                                </ul>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-holder">
                                <input type="text" class="form-control datepicker-here" data-language='en' data-date-format="dd - mm - yyyy" id="dp1" placeholder="Date of Birth"/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-holder">
                                <input type="text" class="form-control" placeholder="Slogan"/>

                            </div>
                        </div>
                        <div class="form-row form-group">
                            <div class="form-holder">
                                <input type="text" class="form-control" placeholder="Twitter"/>
                                <i class="zmdi zmdi-twitter small"></i>
                            </div>
                            <div class="form-holder">
                                <input type="text" class="form-control" placeholder="Linked In"/>
                                <i class="zmdi zmdi-linkedin small"></i>
                            </div>
                        </div>
                        <div class="form-row form-group">
                            <div class="form-holder">
                                <input type="text" class="form-control" placeholder="Facebook"/>
                                <i class="zmdi zmdi-facebook small"></i>
                            </div>
                            <div class="form-holder">
                                <input type="text" class="form-control" placeholder="Google"/>
                                <i class="zmdi zmdi-google small"></i>
                            </div>
                        </div>
                	</div>
                </section>

              
                <h4></h4>
                <section class="section-3">
                    <div class="inner">
                        <a href="#" class="avartar">
                            <img src="images/avartar.png" alt=""/>
                        </a>
                        <h6>Payment Method</h6>
                        <div class="payment-block">
                            <div class="payment-item active">
                                <div class="payment-logo">
                                    <img src="images/visa.png" alt=""/>
                                </div>
                                <div class="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div class="payment-item">
                                <div class="payment-logo">
                                    <img src="images/master-card.png" alt=""/>
                                </div>
                                <div class="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div class="payment-item">
                                <div class="payment-logo">
                                    <img src="images/giropay.png" alt=""/>
                                </div>
                                <div class="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div class="payment-item">
                                <div class="payment-logo">
                                    <img src="images/bleue.png" alt=""/>
                                </div>
                                <div class="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div class="payment-item">
                                <div class="payment-logo">
                                    <img src="images/paypal.png" alt=""/>
                                </div>
                                <div class="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div class="payment-item">
                                <div class="payment-logo">
                                    <img src="images/ideal.png" alt=""/>
                                </div>
                                <div class="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div class="payment-item">
                                <div class="payment-logo">
                                    <img src="images/mister.png" alt=""/>
                                </div>
                                <div class="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                            <div class="payment-item">
                                <div class="payment-logo">
                                    <img src="images/maestro.png" alt=""/>
                                </div>
                                <div class="payment-content">
                                    <p>Visa ... 8314</p>
                                    <p>Express  06/21</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
		</div>
                
            </div>
        )
    }

}

export default Wizard