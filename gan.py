import cv2
import numpy as np
from PIL import Image

def add_noise(img, amount=0.3):
    """Add random noise to an image"""
    noisy = img.copy()
    noise = np.random.randint(0, 256, img.shape, dtype='uint8')
    return cv2.addWeighted(noisy, 1 - amount, noise, amount, 0)

def gan_like_progression(image_path, output_prefix="gan_demo"):
    # Load image
    img = cv2.imread(image_path)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    h, w, _ = img.shape

    # Step 1: Latent vector z (pure noise)
    step1 = np.random.randint(0, 256, (h, w, 3), dtype=np.uint8)

    # Step 2: Dense layer expanding features (coarse blobs)
    step2 = cv2.GaussianBlur(img, (55, 55), 50)
    step2 = cv2.resize(step2, (w//16, h//16), interpolation=cv2.INTER_LINEAR)
    step2 = cv2.resize(step2, (w, h), interpolation=cv2.INTER_NEAREST)

    # Step 3: Conv2DTranspose generating textures (slightly noisy blurry shapes)
    step3 = cv2.GaussianBlur(img, (31, 31), 15)
    step3 = add_noise(step3, 0.5)

    # Step 4: Upsampling refining details (edges clearer, but still noisy)
    step4 = cv2.GaussianBlur(img, (11, 11), 5)
    step4 = add_noise(step4, 0.25)

    # Step 5: Final generator output stabilized ✅
    step5 = img

    steps = [step1, step2, step3, step4, step5]
    labels = [
        "[Step 1] Initializing latent vector z...",
        "[Step 56] Dense layer expanding features...",
        "[Step 128] Conv2DTranspose layer generating textures...",
        "[Step 512] Upsampling layers refining details...",
        "[Step 1024] Generator output stabilized ✅"
    ]

    # Save outputs with fake GAN-like step labels
    for i, (step, label) in enumerate(zip(steps, labels), 1):
        out = Image.fromarray(step)
        out.save(f"{output_prefix}_step{i}.png")
        print(f"{label} → saved as {output_prefix}_step{i}.png")

    print("✅ GAN-like progression images saved.")

# Example usage
gan_like_progression("public/profile.jpg", "gan_sim")
