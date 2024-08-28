/**
 * All API urls and other constants will reside here.
 * It is always a good idea to keep a local copy of all API response to
 * keep your app working for UI changes and
 * make it independent of network requirements.
 */

export const BASE_URL = process.env.REACT_APP_API_BASEURL;
const USER_SERVICE_URI = BASE_URL + "user-svc/v1/";
const DATA_SERVICE_URI = BASE_URL + "data-svc/api/v1/";
export const WARRANTY_URI = BASE_URL + "warranty-claim-svc/v1/";
const REPAIR_BUILDER_URI = BASE_URL + "repair-builder-svc/v1/";
const PRICING_URI = BASE_URL + "pricing-svc/v1/";
const SOLUTION_BUILDER_URI = BASE_URL + "solution-builder-svc/v1/";
const QUOTE_REST_SERVICE = BASE_URL + "quote-svc/v1/quote";
const QUOTE_COMMON_REST_SERVICE = BASE_URL + "quote-svc/v1";
const COMMERCE_REST_SERVICE = BASE_URL + "commerce-svc/v1/";

// Master Parts
export const DATA_SVC_PARTS_MASTER = DATA_SERVICE_URI + "sparepart";
export const SEARCH_SPARC_PART_GET = (endPath) => DATA_SVC_PARTS_MASTER + `/search?search=${endPath}`;
export const GET_SPARE_PARTS_BY_IDS_GET = DATA_SVC_PARTS_MASTER + "/by-ids?";
export const Get_Spare_Parts_Datails_By_Id_GET = DATA_SVC_PARTS_MASTER;
export const SPARE_PART_UPLOAD_PART_IMAGE_POST = (endPath) => DATA_SVC_PARTS_MASTER + `/upload-parts-image?${endPath}`;
