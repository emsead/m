document.getElementById("download").addEventListener("click", function() {
    var imgUrl = 'Resume.jpg';
  
    var link = document.createElement('a');
    link.href = imgUrl;
    link.download = 'DomingoCV.jpg';
  
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  });
  
