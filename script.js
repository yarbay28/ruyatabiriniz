
function generateInterpretation() {
    const dream = document.getElementById("dreamInput").value;
    const result = document.getElementById("result");
    if (!dream.trim()) {
        result.innerHTML = "<p>Lütfen rüyanızı yazın.</p>";
        return;
    }

    // Basit örnek yorumlama
    result.innerHTML = "<p><strong>Genel Yorum:</strong> Bu rüya bilinçaltınızdaki duygulara işaret edebilir. Daha fazla detay için profesyonel yorum alabilirsiniz.</p>";
}
