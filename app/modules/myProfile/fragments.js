import gql from 'graphql-tag';

import { profileRelation } from '../friends/fragments';

const mprofile = gql`
  fragment mprofile on mprofile {
    id
    nickname
    lastname
    fullName
    name
    photo
    lastonline_ts
    vip_until
    vipSettings
  }
`;

const mprofileFull = gql`
  fragment mprofileFull on mprofile {
    id
    slogan
    sex
    birthday_date
    height
    relationship_status
    relationship_link
    sexual_orientation
    body_type
    personality_type
    character_type
    have_childs
    want_childs
    is_smoke
    is_drink
    is_drugs
    faith
    education_type
    want_move
    live_type
    about_me
    about_ideal_partner
    about_favorite_books
    about_favorite_movies
    blocked_at
    is_deleted
    profile_type
    is_current
    photo
    name
    shortName
    fullName
    lastname
    nickname
    color_theme
    sort
    is_warning
    lastid_feed
    feed_settings
    monogamous
    ethnicity
    show_in_search
    showLocation
    city_title
    have_apartment
    all_included
    lastonline_ts
    isOnline
    url_video
    vip_until
    vipSettings
    created_ts
    updated_ts
    croppie
    geohash
    deleted_ts
    card_code
    sticker
    partner_code
    age
    relations {
      ...profileRelation
    }
  }
  ${profileRelation}
`;

export { mprofile, mprofileFull };
