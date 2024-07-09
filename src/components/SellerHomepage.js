import React, { useState } from "react";
import checkmark from '../assets/checkmark.svg';
import '../css/sellerHomePage.css'

const SellerHomepage=()=>{

    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtp, setShowOtp] = useState(false);
    const [otp,setOtp] = useState('');


    const handleSubmit=(e)=>{
        e.preventDefault();

        // phone validation
        const regex = /[^0-9]/g;

        if(phoneNumber.length<10 || phoneNumber.length>10 || regex.test(phoneNumber)){
            alert('Enter Valid phone number');
        }else{
            setShowOtp(true);
        }
    }

    const handlePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value);
    }
    return(
        <div className="sellerContainer">
            <div className="upper-section">
                <h1>Sell or Rent your Property For Free</h1>
                <p>Whether you're ready to sell or looking for answers, we'll guide you with data and expertise specific to your needs.</p>
            </div>
            <div className="lower-section">
                <div className="left-section">
                    <h2>Upload your property in 4 simple steps</h2>
                    <ul className="steps">
                        <li><span className="checkmark"><img src={checkmark}></img></span> Add your property's <strong>Basic Details</strong></li>
                        <li><span className="checkmark"><img src={checkmark}></img></span> Add property <strong>Location</strong></li>
                        <li><span className="checkmark"><img src={checkmark}></img></span> Add property <strong>Features and amenities</strong></li>
                        <li><span className="checkmark"><img src={checkmark}></img></span> Add <strong>Price details</strong></li>
                        <li><span className="checkmark"><img src={checkmark}></img></span> Add your best <strong>Property Shots</strong></li>
                    </ul>
                </div>
                <div className="right-section">
                    <div className="form-container">
                        <h2>LETS GET YOU STARTED!</h2>
                        {!showOtp? <form>
                            <label>
                                <span class="required">*</span> I am:
                            </label>
                            <div className="radio-group">
                                <div>
                                    <input type="radio" id="owner" name="type" value="owner" checked/>
                                    <label for="owner">Owner</label>
                                </div>
                                <div>
                                    <input type="radio" id="builder" name="type" value="builder"/>
                                    <label for="builder">Builder</label>
                                </div>
                                
                            </div>
                            <label for="name">Your Name <span class="required">*</span></label>
                            <input type="text" id="name" name="name" placeholder="Name"/>
                            <label for="country">Country <span class="required">*</span></label>
                            <select id="country" name="country">
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Cabo Verde">Cabo Verde</option>
                                <option value="Cambodia">Cambodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Central African Republic">Central African Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Cuba">Cuba</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czechia (Czech Republic)">Czechia (Czech Republic)</option>
                                <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritrea">Eritrea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Eswatini (fmr. Swaziland)">Eswatini (fmr. Swaziland)</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Greece">Greece</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bissau">Guinea-Bissau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iran">Iran</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia">Micronesia</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Myanmar (formerly Burma)">Myanmar (formerly Burma)</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="North Korea">North Korea</option>

                            </select>
                            <label for="phone">Phone <span class="required">*</span></label>
                            <div className="phone-group">
                                <select id="phone-code" name="phone-code">
                                    <option value="+93">+93 Afghanistan</option>
                                    <option value="+355">+355 Albania</option>
                                    <option value="+213">+213 Algeria</option>
                                    <option value="+376">+376 Andorra</option>
                                    <option value="+244">+244 Angola</option>
                                    <option value="+1-268">+1-268 Antigua and Barbuda</option>
                                    <option value="+54">+54  Argentina</option>
                                    <option value="+374">+374 Armenia</option>
                                    <option value="+61">+61  Australia</option>
                                    <option value="+43">+43  Austria</option>
                                    <option value="+994">+994 Azerbaijan</option>
                                    <option value="+1-242">+1-242 Bahamas</option>
                                    <option value="+973">+973 Bahrain</option>
                                    <option value="+880">+880 Bangladesh</option>
                                    <option value="+1-246">+1-246 Barbados</option>
                                    <option value="+375">+375 Belarus</option>
                                    <option value="+32">+32  Belgium</option>
                                    <option value="+501">+501 Belize</option>
                                    <option value="+229">+229 Benin</option>
                                    <option value="+975">+975 Bhutan</option>
                                    <option value="+591">+591 Bolivia</option>
                                    <option value="+387">+387 Bosnia and Herzegovina</option>
                                    <option value="+267">+267 Botswana</option>
                                    <option value="+55">+55  Brazil</option>
                                    <option value="+673">+673 Brunei</option>
                                    <option value="+359">+359 Bulgaria</option>
                                    <option value="+226">+226 Burkina Faso</option>
                                    <option value="+257">+257 Burundi</option>
                                    <option value="+855">+855 Cambodia</option>
                                    <option value="+237">+237 Cameroon</option>
                                    <option value="+1">+1   Canada</option>
                                    <option value="+238">+238 Cape Verde</option>
                                    <option value="+236">+236 Central African Republic</option>
                                    <option value="+235">+235 Chad</option>
                                    <option value="+56">+56  Chile</option>
                                    <option value="+86">+86  China</option>
                                    <option value="+57">+57  Colombia</option>
                                    <option value="+269">+269 Comoros</option>
                                    <option value="+242">+242 Congo</option>
                                    <option value="+243">+243 Congo, Democratic Republic of the</option>
                                    <option value="+506">+506 Costa Rica</option>
                                    <option value="+385">+385 Croatia</option>
                                    <option value="+53">+53  Cuba</option>
                                    <option value="+357">+357 Cyprus</option>
                                    <option value="+420">+420 Czech Republic</option>
                                    <option value="+45">+45  Denmark</option>
                                    <option value="+253">+253 Djibouti</option>
                                    <option value="+1-767">+1-767 Dominica</option>
                                    <option value="+1-809">+1-809 Dominican Republic</option>
                                    <option value="+670">+670 East Timor</option>
                                    <option value="+593">+593 Ecuador</option>
                                    <option value="+20">+20  Egypt</option>
                                    <option value="+503">+503 El Salvador</option>
                                    <option value="+240">+240 Equatorial Guinea</option>
                                    <option value="+291">+291 Eritrea</option>
                                    <option value="+372">+372 Estonia</option>
                                    <option value="+251">+251 Ethiopia</option>
                                    <option value="+679">+679 Fiji</option>
                                    <option value="+358">+358 Finland</option>
                                    <option value="+33">+33  France</option>
                                    <option value="+241">+241 Gabon</option>
                                    <option value="+220">+220 Gambia</option>
                                    <option value="+995">+995 Georgia</option>
                                    <option value="+49">+49  Germany</option>
                                    <option value="+233">+233 Ghana</option>
                                    <option value="+30">+30  Greece</option>
                                    <option value="+1-473">+1-473 Grenada</option>
                                    <option value="+502">+502 Guatemala</option>
                                    <option value="+224">+224 Guinea</option>
                                    <option value="+245">+245 Guinea-Bissau</option>
                                    <option value="+592">+592 Guyana</option>
                                    <option value="+509">+509 Haiti</option>
                                    <option value="+504">+504 Honduras</option>
                                    <option value="+36">+36  Hungary</option>
                                    <option value="+354">+354 Iceland</option>
                                    <option value="+91">+91  India</option>
                                    <option value="+62">+62  Indonesia</option>
                                    <option value="+98">+98  Iran</option>
                                    <option value="+964">+964 Iraq</option>
                                    <option value="+353">+353 Ireland</option>
                                    <option value="+972">+972 Israel</option>
                                    <option value="+39">+39  Italy</option>
                                    <option value="+1-876">+1-876 Jamaica</option>
                                    <option value="+81">+81  Japan</option>
                                    <option value="+962">+962 Jordan</option>
                                    <option value="+7">+7   Kazakhstan</option>
                                    <option value="+254">+254 Kenya</option>
                                    <option value="+686">+686 Kiribati</option>
                                    <option value="+965">+965 Kuwait</option>
                                    <option value="+996">+996 Kyrgyzstan</option>
                                    <option value="+856">+856 Laos</option>
                                    <option value="+371">+371 Latvia</option>
                                    <option value="+961">+961 Lebanon</option>
                                    <option value="+266">+266 Lesotho</option>
                                    <option value="+231">+231 Liberia</option>
                                    <option value="+218">+218 Libya</option>
                                    <option value="+423">+423 Liechtenstein</option>
                                    <option value="+370">+370 Lithuania</option>
                                    <option value="+352">+352 Luxembourg</option>
                                    <option value="+261">+261 Madagascar</option>
                                    <option value="+265">+265 Malawi</option>
                                    <option value="+60">+60  Malaysia</option>
                                    <option value="+960">+960 Maldives</option>
                                    <option value="+223">+223 Mali</option>
                                    <option value="+356">+356 Malta</option>
                                    <option value="+692">+692 Marshall Islands</option>
                                    <option value="+222">+222 Mauritania</option>
                                    <option value="+230">+230 Mauritius</option>
                                    <option value="+52">+52  Mexico</option>
                                    <option value="+691">+691 Micronesia</option>
                                    <option value="+373">+373 Moldova</option>
                                    <option value="+377">+377 Monaco</option>
                                    <option value="+976">+976 Mongolia</option>
                                    <option value="+382">+382 Montenegro</option>
                                    <option value="+212">+212 Morocco</option>
                                    <option value="+258">+258 Mozambique</option>
                                    <option value="+95">+95  Myanmar</option>
                                    <option value="+264">+264 Namibia</option>
                                    <option value="+674">+674 Nauru</option>
                                    <option value="+977">+977 Nepal</option>
                                    <option value="+31">+31  Netherlands</option>
                                    <option value="+64">+64  New Zealand</option>
                                    <option value="+505">+505 Nicaragua</option>
                                    <option value="+227">+227 Niger</option>
                                    <option value="+234">+234 Nigeria</option>
                                    <option value="+850">+850 North Korea</option>
                                    <option value="+47">+47  Norway</option>
                                </select>
                                <input type="tel" id="phone" name="phone" placeholder="000-000-0000" onChange={handlePhoneNumber} value={phoneNumber}/>
                            </div>
                            <p className="or">OR</p>
                            <label for="email">Email <span className="required">*</span></label>
                            <input type="email" id="email" name="email" placeholder="email" />
                            
                        </form>: <div className="otpContainer">
                            <div>
                                <h2>Enter OTP sent on {phoneNumber}<span class="required">*</span></h2>
                                <a href="#">Change</a>
                            </div>
                            <input type="text" placeholder='0 0 0 0'/>
                            <a href="#">Resend Otp</a>

                        </div>}
                        <div className="form-footer">
                            <p className="help-text">Need Help? <strong>Call 9999999999</strong> </p>
                            <button className="btn" type="Submit" onClick={handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
    )
}

export default SellerHomepage;