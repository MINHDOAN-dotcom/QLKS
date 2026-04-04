// ==================== UTILITY FUNCTIONS ====================
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
}

function formatDate(date) {
    return new Date(date).toLocaleDateString('vi-VN');
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 ${
        type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'
    } text-white text-sm`;
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==================== AUTH FUNCTIONS ====================
function checkAuth() {
    const isLoggedIn = localStorage.getItem('admin_logged_in');
    if (!isLoggedIn && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('admin_logged_in');
    window.location.href = 'login.html';
}

// ==================== LOADING FUNCTIONS ====================
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'global-loader';
    loader.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
    loader.innerHTML = '<div class="bg-white p-6 rounded-xl"><div class="w-10 h-10 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div><p class="mt-3 text-sm">Đang tải...</p></div>';
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.getElementById('global-loader');
    if (loader) loader.remove();
}

// ==================== DATA FUNCTIONS ====================
const roomsData = [
    { id: 1, number: "501", name: "Deluxe City View", type: "Deluxe", price: 1200000, area: 35, capacity: 2, status: "available", amenities: ["wifi", "tv", "ac"] },
    { id: 2, number: "502", name: "Deluxe Ocean View", type: "Deluxe", price: 1500000, area: 38, capacity: 2, status: "available", amenities: ["wifi", "tv", "ac", "bath"] },
    { id: 3, number: "503", name: "Standard Double", type: "Standard", price: 850000, area: 25, capacity: 2, status: "occupied", amenities: ["wifi", "tv"] },
];

const bookingsData = [
    { id: "#BK-001", customer: "Nguyễn Văn A", room: "Deluxe", checkin: "15/03/2026", checkout: "18/03/2026", status: "confirmed", amount: 2500000 },
    { id: "#BK-002", customer: "Trần Thị B", room: "Standard", checkin: "16/03/2026", checkout: "17/03/2026", status: "pending", amount: 1200000 },
];

const customersData = [
    { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", phone: "0901 234 567", bookings: 5, spent: 12500000 },
    { id: 2, name: "Trần Thị B", email: "b@gmail.com", phone: "0902 345 678", bookings: 3, spent: 8500000 },
];

// Export functions for use in pages
window.formatCurrency = formatCurrency;
window.formatDate = formatDate;
window.showToast = showToast;
window.checkAuth = checkAuth;
window.logout = logout;
window.showLoading = showLoading;
window.hideLoading = hideLoading;
window.roomsData = roomsData;
window.bookingsData = bookingsData;
window.customersData = customersData;

// Auto check auth on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAuth);
} else {
    checkAuth();
}