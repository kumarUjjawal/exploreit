export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-semibold">Need Help?</h3>
          <p><strong>Call Us</strong><br />+123456</p>
          <p><strong>Email Us</strong><br />hello@site.com</p>
        </div>
        <div>
          <h3 className="font-semibold">About Us</h3>
          <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Travel Blogs and Tips</li>
            <li>Work With Us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Support</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Customer Support</li>
            <li>Contact and Channels</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Pay Safely With Us</h3>
          <p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
          <p>💳 VISA | Mastercard</p>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-600 pt-4">
        <p>© 2022 Travel Tour All Rights Reserved.</p>
        <p>Follow us on: 📘 🐦 🔗 📌</p>
      </div>
    </footer>
  );
}
