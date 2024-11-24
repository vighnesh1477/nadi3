window.onload = function() {
    const reportData = JSON.parse(sessionStorage.getItem('reportData'));

    if (reportData) {
        document.getElementById('reportContent').innerHTML = `
            <p><strong>Age:</strong> ${reportData.age}</p>
            <p><strong>Gender:</strong> ${reportData.gender}</p>
            <p><strong>Diabetes Level:</strong> ${reportData.diabetesLevel}</p>
            <p><strong>Recommendations:</strong> ${reportData.advice}</p>
        `;
    }

    document.getElementById('downloadBtn').addEventListener('click', function() {
        downloadPDF(reportData);
    });
};

function downloadPDF(reportData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text("Diabetes Prediction Report", 20, 10);
    doc.text(`Age: ${reportData.age}`, 20, 30);
    doc.text(`Gender: ${reportData.gender}`, 20, 40);
    doc.text(`Diabetes Level: ${reportData.diabetesLevel}`, 20, 50);
    doc.text(`Recommendations: ${reportData.advice}`, 20, 60);

    doc.save("diabetes_prediction_report.pdf");
}

function goBack() {
    window.history.back();
}
