/*untuk responsif di bagian Contact US*/
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Anda dapat melakukan sesuatu dengan data ini, seperti mengirim ke server
    alert(`Terima kasih, ${name}! Pesan Anda telah diterima.`);
    
    // Reset formulir
    this.reset();
});