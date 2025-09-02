export function responsive() {
  function calculateScreenSize() {
    console.log("test");

    const width = window.innerWidth;
    const height = window.innerHeight;
    const screenDesignDesktopHeight = 1080;
    const screenDesignMobileWidth = 1080;

    const html = document.querySelector("html");
    let scale;

    if ((width > height || width > 768) && width / height >= 1.5)
      scale = (height / screenDesignDesktopHeight) * 100;
    else if ((width > height || width > 768) && width / height < 1.5)
      scale = (height / 1080) * 100 * 0.7;
    else if (width <= 768) scale = (width / screenDesignMobileWidth) * 100;

    html.style.fontSize = scale + "%";
    return scale;
  }

  // ทำงานเมื่อโหลดเสร็จ
  window.addEventListener("load", () => {
    calculateScreenSize();
    $(window).on("resize", calculateScreenSize);
  });
}
