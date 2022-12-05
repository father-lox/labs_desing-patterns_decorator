import Product from "./Product.js";

const productArray: Product[] = [
    new Product(
        'Logitech MK270',
        'Reliable Plug and Play: The USB receiver provides a reliable wireless connection up to 33 ft (1), so you can forget about drop-outs and delays and you can take it wherever you use your computer ',
        36.49,
        ['keyboard']
    ),
    new Product(
        'Apple AirPods (2nd Generation)',
        'Effortless setup, in-ear detection, and automatic switching for a magical experience. Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch, or Apple TV ',
        17.95,
        ['apple', 'headphones']
    ),
    new Product(
        'Apple MacBook Air Laptop: Apple M1 Chip, 13',
        'Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.',
        970.99,
        ['apple', 'notebook']
    ),
    new Product(
        'Samsung 970 EVO Plus SSD 2TB',
        'ALWAYS EVOLVING SSD: Faster than the 970 EVO, the 970 EVO Plus is powered by the latest V-NAND technology and firmware optimization; It maximizes the potential of NVMe bandwidth for unbeatable computing; Comes in capacities of up to 2TB, with reliability of up to 1,200 TBW.',
        189.95,
        ['memory']
    ),
    new Product(
        'Nintendo Switch – OLED Model',
        'Enhanced audio – Enjoy enhanced sound from the system’s onboard speakers when playing in Handheld and Tabletop modes.',
        399.95,
        ['new']
    ),
    new Product(
        'ZOTAC Gaming GeForce RTX 3060 ',
        '3 x DisplayPort 1.4a, 1 x HDMI 2.1, DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6 ',
        344.95,
        ['GeForce RTX']
    )
];

export default productArray;