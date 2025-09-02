export function initPage() {
  window.addEventListener("load", () => {
    // เตรียม state เริ่มต้น
    gsap.set(".card__left", {
      rotationY: 0,
      transformOrigin: "left center",
    });

    // toggle flip
    let isOpen = false;

    $(".group-card").on("click", function () {
      let tl = gsap.timeline({
        defaults: { duration: 1.2, ease: "power2.inOut" },
      });

      if (!isOpen) {
        console.log("if");

        // เปิดการ์ด
        tl.to(".cake-front, .card__left", { rotationY: -180 }).to(
          ".cake-back, .card__left",
          { rotationY: 0 },
          "<"
        );

        tl.to(
          `.group-card`,

          {
            margin: `0px`,
          },
          "<"
        );
      } else {
        console.log("else");

        // ปิดกลับ
        tl.to(".cake-front, .card__right", { rotationY: 0 }).to(
          ".cake-back, .card__left",
          { rotationY: -180 },
          "<"
        );

        let cardWidth = $(".card__right").width();

        tl.fromTo(
          `.group-card`,
          {
            marginRight: "0",
          },
          {
            marginRight: `-${cardWidth}px`,
          },
          "<"
        );
      }

      isOpen = !isOpen;
    });
  });
}
