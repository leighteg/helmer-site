import { createSignal, onCleanup, Show, For } from "solid-js";
import "./Carousel.css";

const Carousel = (props: { images: string[] }) => {
    const images = props.images;

    let interval: number;
    const startSlide = () => {
        interval = setInterval(next, 4000);
    }

    const [current, setCurrent] = createSignal(0);

    const next = () => setCurrent(c => (c + 1) % images.length);
    const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);

    let touchStartX: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
        clearInterval(interval)
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (Math.abs(deltaX) > 50) { // swipe threshold
            if (deltaX > 0) setCurrent(c => (c + 1) % images.length);
            else setCurrent(c => (c - 1 + images.length) % images.length);
        }

        touchStartX = null;

        startSlide()
    };

    startSlide();
    onCleanup(() => clearInterval(interval));

    return (
        <div class="carousel-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <span class="carousel-title">helmer</span>
            
            <div class="carousel-wrapper" style={{ transform: `translateX(-${current() * 100}%)` }}>
                <For each={images}>{(image) =>
                    <img src={image} class="carousel-image" />
                }</For>
            </div>

            <button class="carousel-button prev" onClick={() => {
                clearInterval(interval)
                prev()
                startSlide()
            }}>
                ‹
            </button>
            <button class="carousel-button next" onClick={() => {
                clearInterval(interval)
                next()
                startSlide()
            }}>
                ›
            </button>
        </div>
    );
};

export default Carousel;