import React, { useState } from "react";

function ProductDetails() {
    const [content, setContent] = useState(
        <ul>
            <li>Located among the picturesque mountains of Pelhar, Great Escape is a 24-acre water theme park in Virar East, Maharashtra, Mumbai. It features multiple pools and slides, including the new humungous water slide attraction. Enjoy 18 exciting rides, over a dozen breathtaking water slides, wave pools, landing pool, kiddies pool, jungle safari slides, rain dance, and more. Plus, unlimited vegetarian food, live counters, and DJ. No alcohol is permitted. An ideal water park for family and friends in Mumbai. We employ state-of-the-art safety and medical facilities, and our new operations prioritize health and safety with your cooperation. Join us at Great Escape Water Park and recharge yourself!</li>
            <li>Address:<br />
                Parol - Bhiwandi Road, Off Vajreshwari Road Bombay Ahmedabad highway, Virar (East), Thane, Maharashtra, India</li>
            <li>Park Timings:<br />
                Monday To Saturday :<br />
                10:00 AM TO 06:00 PM<br />
                Sunday : 09:00 AM TO 06:00 PM<br />
                Note: All Slides and Wave pool close<br />
                at 05:00 PM</li>
        </ul>
    );

    function handleLinkClick(linkName) {
        // Update the content based on which link was clicked
        if (linkName === "description") {
            setContent(
                <div>
                <ul>
                    <li>Located among the picturesque mountains of Pelhar, Great Escape is a 24-acre water theme park in Virar East, Maharashtra, Mumbai. It features multiple pools and slides, including the new humungous water slide attraction. Enjoy 18 exciting rides, over a dozen breathtaking water slides, wave pools, landing pool, kiddies pool, jungle safari slides, rain dance, and more. Plus, unlimited vegetarian food, live counters, and DJ. No alcohol is permitted. An ideal water park for family and friends in Mumbai. We employ state-of-the-art safety and medical facilities, and our new operations prioritize health and safety with your cooperation. Join us at Great Escape Water Park and recharge yourself!</li>
                    <li>Address:<br />
                        Parol - Bhiwandi Road, Off Vajreshwari Road Bombay Ahmedabad highway, Virar (East), Thane, Maharashtra, India</li>
                    <li>Park Timings:<br />
                        Monday To Saturday :<br />
                        10:00 AM TO 06:00 PM<br />
                        Sunday : 09:00 AM TO 06:00 PM<br />
                        Note: All Slides and Wave pool close<br />
                        at 05:00 PM</li>
                </ul>
                </div>
            );
        } else if (linkName === "what-you-get") {
            setContent(
                <div>
            <ul>
                <li>Entry Ticket inclusive of Taxes</li>
                <li>Meals</li>
            </ul>
            </div>
            );
        } else if (linkName === "what-you-dont-get") {
            setContent(
                <div>
                <ul>
                    <li>Pick up & Drop</li>
                    <li>Beverages/Alcohol</li>
                    <li>Personal Expenses</li>
                </ul>
                </div>
            );
        } else if (linkName === "highlights") {
            setContent(
                <div>
                <ul>
                    <li>18 slides</li>
                    <li>Wave pool</li>
                    <li>Rain Dance</li>
                    <li>Kids Pool</li>
                    <li>Toddler's Play area</li>
                    <li>Oxygen zone</li>
                    <li>Games space</li>
                    <li>Smoking Zone</li>
                    <li>Merchandising</li>
                    <li>Credal</li>
                    <li>Wheel Chair</li>
                    <li>Ambulance</li>
                    <li>Life Jacket</li>
                    <li>Isolated Zone</li>
                    <li>Food And Beverages</li>
                </ul>
                </div>

            );
        } else if (linkName === "terms-and-conditions") {
            setContent(
                <div>
                <h4>TICKETING:</h4>
<ul>
  <li>Senior citizens need valid age proof ID.</li>
  <li>Print E-ticket & exchange for wristband.</li>
  <li>Carry card used for payment.</li>
  <li>Tickets cannot be exchanged, cancelled, or refunded.</li>
  <li>Offers/promotions cannot be combined.</li>
  <li>Standard prices for child, adult, senior citizens.</li>
  <li>Rates/terms/entry subject to change without notice.</li>
  <li>Free entry for children &lt;3.3ft, 3.3-4.6ft child ticket, &gt;4.6ft adult ticket.</li>
  <li>No re-entry after exiting park.</li>
  <li>By booking, guests agree to terms & conditions.</li>
</ul>

<h4>YOUR BELONGINGS:</h4>
<ul>
  <li>Subject to security check, management may refuse entry of items.</li>
  <li>Management not responsible for lost belongings.</li>
  <li>Prohibited items: weapons, outside food/drinks, alcohol, illegal drugs.</li>
  <li>Photos/videos may be taken for promotional purposes.</li>
</ul>

<h4>PARKING:</h4>
<ul>
  <li>Vehicles parked at owner's risk.</li>
  <li>Management not responsible for any damage caused to vehicles.</li>
</ul>

<h4>LOCKERS:</h4>
<ul>
  <li>Available on rental basis for Rs.100/day + Rs.100 deposit.</li>
  <li>Lost keys subject to Rs.100 fine.</li>
</ul>

<h4>SMOKING:</h4>
<ul>
  <li>Prohibited except in designated areas.</li>
</ul>

<h4>CODE OF CONDUCT:</h4>
<ul>
  <li>Be polite & courteous to fellow guests.</li>
  <li>Do not save places in queue or disrupt activities.</li>
  <li>Photography/recording for commercial purposes prohibited.</li>
  <li>No unsafe, illegal, or offensive behavior.</li>
  <li>Do not interfere with Park staff or property.</li>
  <li>Do not litter or deface property.</li>
  <li>Do not gamble or create excessive noise.</li>
  <li>Do not enter restricted areas or conduct unauthorized events.</li>
  <li>Report irregular activity/misconduct to staff.</li>
  <li>Alcohol consumption results in ejection from Park.</li>
</ul>

<h4>CANCELLATIONS/REFUNDS/CHARGEBACKS:</h4>
<ul>
  <li>No refunds for cancelled/unused tickets.</li>
  <li>Chargebacks not permissible for unused tickets.</li>
</ul>

<h4>DISCLAIMER:</h4>
<ul>
  <li>Management not liable for personal belongings or personal injuries.</li>
  <li>Park facilities used at own risk.</li>
  <li>Guests liable for damage caused to Park property.</li>
  <li>Photos/videos may be taken for promotional purposes.</li>
  <li>Terms and conditions subject to change without notice.</li>
</ul>
</div>

            );
        }
    }

    return (
        <div className="product-details">
            <div className="middle-container-links">
                <a href="#" onClick={() => handleLinkClick("description")}>Description</a> |
                <a href="#" onClick={() => handleLinkClick("what-you-get")}>What you get</a> |
                <a href="#" onClick={() => handleLinkClick("what-you-dont-get")}>What you don't get</a> |
                <a href="#" onClick={() => handleLinkClick("highlights")}>Highlights</a> |
                <a href="#" onClick={() => handleLinkClick("terms-and-conditions")}>Terms & Conditions</a>
            </div>
            <div className="middle-container-text">{content}</div>
        </div>
    );
}

export default ProductDetails;
