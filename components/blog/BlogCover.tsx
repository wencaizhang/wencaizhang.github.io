import NextImage from 'next/image'
import type { MdxFrontMatter } from '~/types/mdx'

const webgradientsClassNames = [
  'warm_flame',
  'night_fade',
  'spring_warmth',
  'juicy_peach',
  'young_passion',
  'lady_lips',
  'sunny_morning',
  'rainy_ashville',
  'frozen_dreams',
  'winter_neva',
  'dusty_grass',
  'tempting_azure',
  'heavy_rain',
  'amy_crisp',
  'mean_fruit',
  'deep_blue',
  'ripe_malinka',
  'cloudy_knoxville',
  'malibu_beach',
  'new_life',
  'true_sunset',
  // 'morpheus_den',
  'rare_wind',
  'near_moon',
  'wild_apple',
  'saint_petersburg',
  'arielles_smile',
  'plum_plate',
  'everlasting_sky',
  'happy_fisher',
  'blessing',
  'sharpeye_eagle',
  'ladoga_bottom',
  'lemon_gate',
  'itmeo_branding',
  'zeus_miracle',
  'old_hat',
  'star_wine',
  'deep_blue',
  'coup_de_grace',
  'happy_acid',
  'awesome_pine',
  'new_york',
  'shy_rainbow',
  'loon_crest',
  'mixed_hopes',
  'fly_high',
  'strong_bliss',
  'fresh_milk',
  'snow_again',
  'february_ink',
  'kind_steel',
  'soft_grass',
  'grown_early',
  'sharp_blues',
  'shady_water',
  'dirty_beauty',
  'great_whale',
  'teen_notebook',
  'polite_rumors',
  'sweet_period',
  'wide_matrix',
  'soft_cherish',
  'red_salvation',
  'burning_spring',
  'night_party',
  'sky_glider',
  'heaven_peach',
  'purple_division',
  'aqua_splash',
  'above_clouds',
  'spiky_naga',
  'love_kiss',
  'sharp_glass',
  'clean_mirror',
  'premium_dark',
  'cold_evening',
  'cochiti_lake',
  'summer_games',
  'passionate_bed',
  'mountain_rock',
  'desert_hump',
  'jungle_day',
  'phoenix_start',
  'october_silence',
  'faraway_river',
  'alchemist_lab',
  'over_sun',
  'premium_white',
  'mars_party',
  'eternal_constance',
  'japan_blush',
  'smiling_rain',
  'cloudy_apple',
  'big_mango',
  'healthy_water',
  'amour_amour',
  'risky_concrete',
  'strong_stick',
  'vicious_stance',
  'palo_alto',
  'happy_memories',
  'midnight_bloom',
  'crystalline',
  'raccoon_back',
  'party_bliss',
  'confident_cloud',
  'le_cocktail',
  'river_city',
  'frozen_berry',
  'elegance',
  'child_care',
  'flying_lemon',
  'new_retrowave',
  'hidden_jaguar',
  'above_the_sky',
  'nega',
  'dense_water',
  // 'chemic_aqua',
  'seashore',
  'marble_wall',
  'cheerful_caramel',
  'night_sky',
  'magic_lake',
  'young_grass',
  'colorful_peach',
  'gentle_care',
  'plum_bath',
  'happy_unicorn',
  'full_metal',
  'african_field',
  'solid_stone',
  'orange_juice',
  'glass_water',
  'slick_carbon',
  'north_miracle',
  'fruit_blend',
  'millennium_pine',
  'high_flight',
  'mole_hall',
  'earl_gray',
  'space_shift',
  'forest_inei',
  'royal_garden',
  'rich_metal',
  'juicy_cake',
  'smart_indigo',
  'sand_strike',
  'norse_beauty',
  'aqua_guidance',
  'sun_veggie',
  'sea_lord',
  'black_sea',
  'grass_shampoo',
  'landing_aircraft',
  'witch_dance',
  'sleepless_night',
  'angel_care',
  'crystal_river',
  'soft_lipstick',
  'salt_mountain',
  'perfect_white',
  'fresh_oasis',
  'strict_november',
  'morning_salad',
  'deep_relief',
  'sea_strike',
  'night_call',
  'supreme_sky',
  'light_blue',
  'mind_crawl',
  'lily_meadow',
  'sugar_lollipop',
  'sweet_dessert',
  'magic_ray',
  'teen_party',
  'frozen_heat',
  'gagarin_view',
  'fabled_sunset',
  'perfect_blue',
]

const createColorSpan = (text) => {
  return (
    <>
      <span className="bg-blue-100 text-blue-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
        Default
      </span>
      <span className="bg-gray-100 text-gray-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
        Dark
      </span>
      <span className="bg-red-100 text-red-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
        Red
      </span>
      <span className="bg-green-100 text-green-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
        Green
      </span>
      <span className="bg-yellow-100 text-yellow-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
        Yellow
      </span>
      <span className="bg-indigo-100 text-indigo-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
        Indigo
      </span>
      <span className="bg-purple-100 text-purple-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
        Purple
      </span>
      <span className="bg-pink-100 text-pink-800 text-2xl font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
        Pink
      </span>
    </>
  )
}

let idx = 0
export function BlogCover({ frontMatter }: { frontMatter: MdxFrontMatter }) {
  let { title, tags, images = [], cover = [] } = frontMatter

  images = images || []
  cover = cover || []

  let imgSrc = cover[0] || images[0] || 'https://static.webjam.cn/images/logos/img.svg'

  const className =
    'overflow-hidden flex justify-center items-center p-1  ' +
    webgradientsClassNames[idx++ % webgradientsClassNames.length]

  return (
    <div
      className={className}
      style={{
        minWidth: '240px',
        minHeight: '160px',
      }}
    >
      {/* 没有图片，使用 tags */}

      {!imgSrc && <div className="w-full flex flex-wrap"></div>}

      {imgSrc && cover.length <= 0 && (
        <NextImage
          alt={title}
          src={imgSrc}
          className="transform transition-transform object-contain duration-200 hover:scale-110 w-full h-full"
          style={{ maxHeight: '240px', maxWidth: '160px' }}
          width={240}
          height={160}
        />
      )}

      {cover.length === 1 && (
        <NextImage
          alt={title}
          src={imgSrc}
          className="transform transition-transform object-contain duration-200 hover:scale-110 w-full h-full"
          style={{ maxHeight: '240px', maxWidth: '160px' }}
          width={240}
          height={160}
        />
      )}

      {cover.length > 1 && (
        <>
          <NextImage
            alt={title}
            src={cover[0]}
            className="transform transition-transform object-contain duration-200 hover:scale-110 w-full h-full"
            style={cover.length >= 1 ? { maxHeight: '140px', maxWidth: '80px' } : {}}
            width={240}
            height={160}
          />
          <NextImage
            alt={title}
            src={cover[1]}
            className="transform transition-transform object-contain duration-200 hover:scale-110 w-full h-full"
            style={cover.length >= 1 ? { maxHeight: '140px', maxWidth: '80px' } : {}}
            width={240}
            height={160}
          />
        </>
      )}
    </div>
  )
}
