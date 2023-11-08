const { PrismaClient } = require("@prisma/client");
require("dotenv").config();
const prisma = new PrismaClient();

// GET products by category
const getProducts = async (req, res) => {
  const { category } = req.params;
  const products = await prisma.product.findMany({
    where: {
      category: category,
    },
    include: {
      categoryImage: true,
      includes: true,
      productImage: true,
      gallery: true,
      others: {
        include: {
          image: true,
        },
      },
    },
  });
  res.json({ ...products });
};

// GET one product

// POST new product
const postProduct = async (req, res) => {
  // await prisma.product.delete({
  // });

  const product = await prisma.product.create({
    data: {
      slug: "zx7-speaker",
      name: "ZX7 Speaker",
      productImage: {
        create: {
          mobile:
            "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/mobile/image-product.jpg",
          tablet:
            "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/tablet/image-product.jpg",
          desktop:
            "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/desktop/image-product.jpg",
        },
      },
      category: "speakers",
      categoryImage: {
        create: {
          mobile:
            "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
          tablet:
            "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
          desktop:
            "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
        },
      },
      new: false,
      price: 3500,
      description:
        "Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      features:
        "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.\n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
      includes: {
        create: [
          {
            quantity: 2,
            item: "Speaker unit",
          },
          {
            quantity: 2,
            item: "Speaker cloth panel",
          },
          {
            quantity: 1,
            item: "User manual",
          },
          {
            quantity: 1,
            item: "3.5mm 7.5m audio cable",
          },
          {
            quantity: 1,
            item: "7.5m optical cable",
          },
        ],
      },
      gallery: {
        create: [
          {
            mobile:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/mobile/image-gallery-1.jpg",
            tablet:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/tablet/image-gallery-1.jpg",
            desktop:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/desktop/image-gallery-1.jpg",
          },
          {
            mobile:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/mobile/image-gallery-2.jpg",
            tablet:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/tablet/image-gallery-2.jpg",
            desktop:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/desktop/image-gallery-2.jpg",
          },
          {
            mobile:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/mobile/image-gallery-3.jpg",
            tablet:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/tablet/image-gallery-3.jpg",
            desktop:
              "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/product-zx7-speaker/desktop/image-gallery-3.jpg",
          },
        ],
      },
      others: {
        create: [
          {
            slug: "zx9-speaker",
            name: "ZX9 Speaker",
            image: {
              create: {
                mobile:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/mobile/image-zx9-speaker.jpg",
                tablet:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/tablet/image-zx9-speaker.jpg",
                desktop:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/desktop/image-zx9-speaker.jpg",
              },
            },
          },
          {
            slug: "xx99-mark-one-headphones",
            name: "XX99 Mark I",
            image: {
              create: {
                mobile:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
                tablet:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
                desktop:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
              },
            },
          },
          {
            slug: "xx59-headphones",
            name: "XX59",
            image: {
              create: {
                mobile:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/mobile/image-xx59-headphones.jpg",
                tablet:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/tablet/image-xx59-headphones.jpg",
                desktop:
                  "https://delyvsmuliqlbeccucrz.supabase.co/storage/v1/object/public/assets/shared/desktop/image-xx59-headphones.jpg",
              },
            },
          },
        ],
      },
    },
    include: {
      categoryImage: true,
      includes: true,
      productImage: true,
      gallery: true,
      others: true,
    },
  });

  res.json({ product });
};
module.exports = {
  getProducts,
  postProduct,
};
