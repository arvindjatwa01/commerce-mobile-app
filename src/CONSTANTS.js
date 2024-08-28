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

export const CREATE_QUOTE_VERSION_WITHOUT_NEW_VERSION = (existingQuote, existingVersion, newVersion) =>
  QUOTE_REST_SERVICE + `/copy-quote?existing_quote_name=${existingQuote}&existing_version=${existingVersion}`;

export const USER_SERVICE_FORGOT_PASSWORD = () => USER_SERVICE_URI + "user/forgot-password";
export const USER_SERVICE_RESET_PASSWORD = () => USER_SERVICE_URI + "user/new-password";
export const DATA_SVC_EQUIPMENT = () => DATA_SERVICE_URI + "equipment";
export const DATA_SVC_COMPONENT_ID = () => DATA_SERVICE_URI + "component-code/ids";
export const DATA_SVC_SUBCOMPONENT = () => DATA_SERVICE_URI + "component-code/getSubComponentsById";
export const DATA_SVC_PARTS_BY_GROUP_NO = () => DATA_SERVICE_URI + "sparepart/groupNumbers";

export const DATA_SVC_COMPONENT_DATA_BY_ID_GET = DATA_SERVICE_URI + "component-code/";

export const CLAIM_MASTER_URL = WARRANTY_URI + "claim";
export const WARRANTY_MASTER_URL = WARRANTY_URI + "warranty";
export const WARRANTY_INSTALLER_MASTER_URL = WARRANTY_URI + "installer";
export const CLAIM_VALUE_MASTER_URL = WARRANTY_URI + "claim_value";
export const RELATED_HOURS_EXPENSES_MASTER_URL = WARRANTY_URI + "related_hours_expenses";
export const SETTLEMENT_VALUE_MASTER_URL = WARRANTY_URI + "settlement_value";
export const RELATED_PARTS_MASTER_URL = WARRANTY_URI + "relatedParts";
export const EVALUATION_PARTS_MASTER_URL = WARRANTY_URI + "evaluation/parts";
export const WARRANTY_EQUIPMENT_MASTER_URL = WARRANTY_URI + "equipment";
export const WARRANTY_RETURN_MASTER_URL = WARRANTY_URI + "warrantyReturn";
export const SHIPMENT_PARTS_MASTER_URL = WARRANTY_URI + "shipment/parts";
export const PARTS_HEADER_MASTER_URL = WARRANTY_URI + "partsHeader";
export const SHIPPING_INFO_MASTER_URL = WARRANTY_URI + "shippingInfo";
export const SHIPMENT_HEADER_MASTER_URL = WARRANTY_URI + "shipmentHeader";
export const CLAIM_ORDER_MASTER_URL = WARRANTY_URI + "claimOrder";

const COMMON_SERVICE_URI = BASE_URL + "common-svc/v1/";

export const QUOTE_COMMON_CONFIG_URL = QUOTE_COMMON_REST_SERVICE + "/common-config/";

//Pricing URLS
export const PRICING_COMMON_CONFIG = PRICING_URI + "common-config/";
export const SOLUTION_PRICING_COMMON_CONFIG = SOLUTION_BUILDER_URI + "common-config/";
export const PRICE_TYPE = SOLUTION_BUILDER_URI + "common-config/";
export const PRICE_LIST = SOLUTION_BUILDER_URI + "common-config/price-list";
export const PRICE_HEAD_TYPE = PRICING_COMMON_CONFIG + "common-config/price-head-type";

// portfolio configuration
export const SOLUTION_PORTFOLIO_MASTER_URL = SOLUTION_BUILDER_URI + "portfolio/";
export const SOLUTION_PORTFOLIO_SEARCH_URL = SOLUTION_BUILDER_URI + "portfolio/search?search=";

export const SEARCH_CUSTOMER = (query) => DATA_SERVICE_URI + `customer/search?search=${query}`;
export const SEARCH_MACHINE = (query) => DATA_SERVICE_URI + `equipment/search?search=${query}`;
export const SEARCH_SPAREPART = (query) => DATA_SERVICE_URI + `sparepart/search?search=${query}`;
export const SEARCH_VENDOR = (query) => DATA_SERVICE_URI + `vendor/search?search=${query}`;
export const SEARCH_CONSUMABLE = (query) => DATA_SERVICE_URI + `consumable/search?search=${query}`;
export const SEARCH_EXTWORK = (query) => DATA_SERVICE_URI + `external-work/search?search=${query}`;
export const FETCH_PARTS_OF_PARTLIST = (partListId, query) => REPAIR_BUILDER_URI + `partlist/${partListId}/sparepart?${query}`;

// ==================
export const ADD_REPAIR_BUILDER_PARTLIST = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/partlist`;
export const ADD_REPAIR_MULTI_PARTS_TO_PARTLIST = (partListId) => REPAIR_BUILDER_URI + `partlist/${partListId}/spareparts`;
export const REPAIR_PART_OF_PARTLIST = (partListId) => REPAIR_BUILDER_URI + `partlist/${partListId}/sparepart`;
export const SEGMENT_OPERATION = (segmentId) => REPAIR_BUILDER_URI + `segment/${segmentId}/operation`;
export const BUILDER_SEGMENT = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/segment`;
export const CREATE_REPAIR_BUILDER = () => REPAIR_BUILDER_URI + "builder";
export const FETCH_BUILDER_DETAILS = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}`;
export const FETCH_BUILDER_VERSION_DETAILS = (builderNo, versionNo) => REPAIR_BUILDER_URI + `builder/${builderNo}/version/${versionNo}`;

export const SEARCH_Builder = (query) => REPAIR_BUILDER_URI + `builder/search?search=${query}`;
export const UPDATE_REPAIR_CUSTOMER = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/customer`;
export const UPDATE_REPAIR_MACHINE = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/machine`;
export const UPDATE_REPAIR_ESTIMATION_TEAM = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/estimation-team`;
export const UPDATE_REPAIR_GENERAL_DETAILS = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/estimate`;
export const UPDATE_REPAIR_PRICE = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/pricing`;
export const UPDATE_REPAIR_STATUS = (builderId, status) => REPAIR_BUILDER_URI + `builder/${builderId}/status/${status}`;
export const UPLOAD_REPAIR_PARTS_TO_PARTLIST = (partListId) => REPAIR_BUILDER_URI + `partlist/${partListId}/upload-excel`;
export const OPERATION_SERVICE = (operationId) => REPAIR_BUILDER_URI + `operation/${operationId}/service-estimate`;
export const OPERATION_SERVICE_EST_DETAILS = (operationId) => REPAIR_BUILDER_URI + `operation/${operationId}/service-estimate`;
export const LABOR_SERVICE = (serviceId) => REPAIR_BUILDER_URI + `service-estimate/${serviceId}/labour`;
export const LABOR_ITEM = (labourId) => REPAIR_BUILDER_URI + `labour/${labourId}/labour-item`;
export const CONSUMABLE_SERVICE = (serviceId) => REPAIR_BUILDER_URI + `service-estimate/${serviceId}/consumable`;
export const CONSUMABLE_ITEM = (consumableId) => REPAIR_BUILDER_URI + `consumable/${consumableId}/consumable-item`;
export const FETCH_BASE_PRICE = (serviceId) => REPAIR_BUILDER_URI + `service-estimate/${serviceId}/base-price`;
export const CREATE_PARTLIST_BUILDER_VERSION = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/partlist-version`;
export const CREATE_BUILDER_VERSION = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/version`;

export const SEGMENT_REMOVE = (segmentId) => REPAIR_BUILDER_URI + `/segment/${segmentId}`;
export const OPERATION_REMOVE = (operationId) => REPAIR_BUILDER_URI + `/operation/${operationId}`;
export const PARTLIST_OPERATION = (operationId) => REPAIR_BUILDER_URI + `operation/${operationId}/partlist`;
export const REMOVE_PARTLIST = (partListId) => REPAIR_BUILDER_URI + `partlist/${partListId}`;
export const PARTLIST_VERSION = (partListId) => REPAIR_BUILDER_URI + `partlist/${partListId}/version`;

export const ADD_REPAIR_QUOTE_ITEM = (quoteId) => QUOTE_REST_SERVICE + `/repair-buider?quote_id=${quoteId}`;
export const ADD_PL_QUOTE_ITEM = (quoteId) => QUOTE_REST_SERVICE + `/part-list?quote_id=${quoteId}`;
export const FETCH_QUOTE_SUMMARY = (quoteId) => QUOTE_REST_SERVICE + `/summary?quote_id=${quoteId}`;
export const CREATE_QUOTE_PAYER = (quoteId) => QUOTE_REST_SERVICE + `/payer?quote_id=${quoteId}`;
export const UPDATE_QUOTE_PAYER = (quotePayerId) => QUOTE_REST_SERVICE + `/payer/${quotePayerId}`;
export const ADD_QUOTE_PRICE_SUMMARY = (quoteId) => QUOTE_REST_SERVICE + `/rbpe?quote_id=${quoteId}`;
export const UPDATE_QUOTE_PRICE_SUMMARY = (priceSummaryId) => QUOTE_REST_SERVICE + `/rbpe/${priceSummaryId}`;
export const ADD_SOLUTION_QUOTE_PRICE_SUMMARY = (quoteId) => QUOTE_REST_SERVICE + `/sbpe?quote_id=${quoteId}`;
export const UPDATE_SOLUTION_QUOTE_PRICE_SUMMARY = (priceSummaryId) => QUOTE_REST_SERVICE + `/sbpe/${priceSummaryId}`;

export const EXTWORK_ITEM = (extWorkId) => REPAIR_BUILDER_URI + `external-work/${extWorkId}/external-work-item`;
export const EXTWORK_SERVICE = (serviceId) => REPAIR_BUILDER_URI + `service-estimate/${serviceId}/external-work`;
export const MISC_SERVICE = (serviceId) => REPAIR_BUILDER_URI + `service-estimate/${serviceId}/miscellaneous`;

/* ===================== Repair Quote Service ============================= */
export const RECENT_QUOTES = (quoteType) => QUOTE_REST_SERVICE + `/recent?quote_type=${quoteType}`;
export const SEARCH_REPAIR_QUOTES = (searchStr) => QUOTE_REST_SERVICE + `/search?search=${searchStr}`;
export const CREATE_REPAIR_QUOTE = (builderId, description, reference) =>
  QUOTE_REST_SERVICE + `/convert-builder-rb-item-to-quote?builder_id=${builderId}&description=${description}&reference=${reference}`;
export const UPDATE_REPAIR_QUOTE = (quoteId) => QUOTE_REST_SERVICE + `/${quoteId}`;
export const UPDATE_REPAIR_QUOTE_ITEM = (quoteItemId) => QUOTE_REST_SERVICE + `/repair-buider/${quoteItemId}`;
export const UPDATE_PL_QUOTE_ITEM = (quoteItemId) => QUOTE_REST_SERVICE + `/part-list/${quoteItemId}`;
export const CREATE_QUOTE_VERSION = (existingQuote, existingVersion, newVersion) =>
  QUOTE_REST_SERVICE + `/copy-quote?existing_quote_name=${existingQuote}&existing_version=${existingVersion}&new_version=${newVersion}`;
export const FETCH_REPAIR_QUOTE_DETAILS = (quoteId) => QUOTE_REST_SERVICE + `/${quoteId}`;
export const FETCH_REPAIR_QUOTE_VERSIONS = (quoteName) => QUOTE_REST_SERVICE + `/versions?quote_name=${quoteName}`;

export const FETCH_BILLING_TYPE = () => QUOTE_COMMON_REST_SERVICE + `/common-config/billing-type`;
export const FETCH_BILLING_FREQ = () => QUOTE_COMMON_REST_SERVICE + `/common-config/billing-frequency`;
export const FETCH_DEL_TYPE = () => QUOTE_COMMON_REST_SERVICE + `/common-config/delivery-type`;
export const FETCH_DEL_PRIORITY = () => QUOTE_COMMON_REST_SERVICE + `/common-config/delivery-priority`;
export const FETCH_PAYMENT_TERMS = () => QUOTE_COMMON_REST_SERVICE + `/common-config/payment-term`;

export const CREATE_SPARE_PART_QUOTE = (builderId, description, reference) =>
  QUOTE_REST_SERVICE + `/convert-builder-pl-item-to-quote?builder_id=${builderId}&description=${description}&reference=${reference}`;
export const CREATE_PART_QUOTE_FROM_KIT = (builderId, description, reference) =>
  QUOTE_REST_SERVICE + `/convert-builder-kit-item-to-quote?builder_id=${builderId}&description=${description}&reference=${reference}`;
export const CREATE_REPAIR_QUOTE_FROM_SJ = (builderId, description, reference) =>
  QUOTE_REST_SERVICE + `/convert-builder-sj-item-to-quote?builder_id=${builderId}&description=${description}&reference=${reference}`;
export const UPLOAD_ITEMS_TO_REP_QUOTE = () => QUOTE_REST_SERVICE + `/repair-builder/item/upload`;
export const UPLOAD_ITEMS_TO_SOL_QUOTE = () => QUOTE_REST_SERVICE + `/solution-builder/item/upload`;
export const UPLOAD_ITEMS_TO_PARTS_QUOTE = () => QUOTE_REST_SERVICE + `/part-list/item/upload`;

// KIT Service
export const CREATE_KIT = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/kit`;

//Standard Jobs or  Templates
export const CREATE_STANDARD_JOB = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/standard-job`;

export const FETCH_REPAIR_BUILDER_PARTLIST = (builderId) => REPAIR_BUILDER_URI + `builder/${builderId}/partlist`;

// Master Equipment
export const validate_Coverage_Get_Url = DATA_SERVICE_URI + "equipment/validate-coverage";
export const SEARCH_EQUIPMENT = (endPath) => DATA_SVC_EQUIPMENT() + `/search?search=${endPath}`;
export const Get_Equipment_Datails_By_Id_GET = DATA_SVC_EQUIPMENT() + "/";

// Master Parts
export const DATA_SVC_PARTS = DATA_SERVICE_URI + "sparepart/";
export const SEARCH_SPARC_PART = (endPath) => DATA_SVC_PARTS + `search?search=${endPath}`;
export const GET_SPARE_PARTS_BY_IDS_GET = DATA_SVC_PARTS + "by-ids?";
export const Get_Spare_Parts_Datails_By_Id_GET = DATA_SVC_PARTS;
export const SPARE_PART_UPLOAD_PART_IMAGE_POST = (endPath) => DATA_SVC_PARTS + `upload-parts-image?${endPath}`;

// Master Customer
export const DATA_SVC_CUSTOMER = DATA_SERVICE_URI + "customer/";
export const SEARCH_CUSTOMER_MASTER = (endPath) => DATA_SVC_CUSTOMER + `/search?search=${endPath}`;
export const Get_Customer_Master_Details_By_Id_GET = DATA_SVC_CUSTOMER;

// Master Consumble
export const DATA_SVC_CONSUMABLE = DATA_SERVICE_URI + "consumable/";
export const SEARCH_CONSUMABLE_MASTER = (endPath) => DATA_SVC_CONSUMABLE + `/search?search=${endPath}`;
export const Get_Consumable_Master_Details_By_Id_GET = DATA_SVC_CONSUMABLE;
//WorkList URIs
export const WORKLIST = (pagination) => COMMON_SERVICE_URI + `worklist/cases${pagination}`;
export const CREATE_WORKLIST = () => COMMON_SERVICE_URI + `worklist/case`;

// local-cases Worklist URIs
export const Get_LOCAl_CASES_WORKLIST_GET = (pagination) => COMMON_SERVICE_URI + `worklist/local-cases${pagination}`;
export const LOCAL_CASES_WORKLIST = COMMON_SERVICE_URI + `worklist/local-case`;

export const WORKLIST_URL = COMMON_SERVICE_URI + `worklist`;
export const TODAY_TASKS_WORKLIST = WORKLIST_URL + `/today-tasks`;

// Warranty Master
const Warrant_Master_Url = WARRANTY_URI + "warranty";
export const Recent_Warranty_List_GET = Warrant_Master_Url + "/recent";
export const Search_By_Fields_Warranty_List_GET = Warrant_Master_Url + "/search-by-fields?";
export const warranty_Details_By_Id_Get = Warrant_Master_Url + "/";
export const Update_Warranty_Details_PUT = Warrant_Master_Url + "/";

// Claim Master
const Claim_Master_Url = WARRANTY_URI + "claim";
export const Claim_Pagination_List_GET = Claim_Master_Url;
export const Search_By_Field_Claim_List_GET = Claim_Master_Url + "/search-by-fields?";
export const Claim_Details_By_Id_Get = Claim_Master_Url + "/";
export const Update_CLaim_Details_PUT = Claim_Master_Url + "/";
export const Claim_Question_Mark_Claimable_GET = Claim_Master_Url + "/mark-claimable";
export const Claim_Convert_To_Repair_GET = Claim_Master_Url + "/convert-to-repair";
export const Create_Claim_POST = Claim_Master_Url;

// Claim Questuin
const Claim_Questions_Master_Url = WARRANTY_URI + "claim/question";
export const Claim_Questions_List_GET = Claim_Questions_Master_Url;
export const claim_Question_Answer_POST = Claim_Questions_Master_Url + "/question-answer";

// claim
const Claim_Order_Master_Url = WARRANTY_URI + "claimOrder";
export const Claim_Order_Create_POST = Claim_Order_Master_Url;
export const Claim_Order_Update_PUT = Claim_Order_Master_Url;

// warranty-return
const Warranty_Return_Master_Url = WARRANTY_URI + "warrantyReturn";
export const Warranty_Return_Create_POST = Warranty_Return_Master_Url;

// waranty-coutry
const Warranty_Country_Master_Url = WARRANTY_URI + "country";
export const Warranty_Country_List_GET = Warranty_Country_Master_Url;

// warranty-parts-Header
const Warranty_Parts_Header_Master_Url = WARRANTY_URI + "partsHeader";
export const Warranty_Parts_Header_Create_POST = Warranty_Parts_Header_Master_Url;

// warranty-shiping-info
const Warranty_Shipping_Info_Master_Url = WARRANTY_URI + "shippingInfo";
export const Warranty_Shipping_Info_Create_POST = Warranty_Shipping_Info_Master_Url;

// warranty-shipment-header
const Warranty_Shipment_Header_Master_Url = WARRANTY_URI + "shipmentHeader";
export const Warranty_Shipment_Header_Create_POST = Warranty_Shipment_Header_Master_Url;

// warranty-assessment
const Warranty_Assessment_Master_Url = WARRANTY_URI + "assessment";
export const Warranty_Assessment_Create_POST = Warranty_Assessment_Master_Url;

// warranty-evaluation
const Warranty_Evaluation_Master_Url = WARRANTY_URI + "evaluation";
export const Warranty_Evaluation_Create_POST = Warranty_Evaluation_Master_Url;

// warranty evaluation questions
const Warranty_Evaluation_Questions_Master_Url = WARRANTY_URI + "evaluation/question";
export const Warranty_Evaluation_Questions_Get_GET = Warranty_Evaluation_Questions_Master_Url + "?";
export const Warranty_Question_Answer_Create_POST = Warranty_Evaluation_Questions_Master_Url + "/question-answer";

// warranty-components
const Warranty_Component_Master_Url = WARRANTY_URI + "component";
export const Warranty_Component_GetById_GET = Warranty_Component_Master_Url;

// warranty-years
const Warranty_Yearly_Master_Url = WARRANTY_URI + "yearly-warranty";
export const Warranty_Yearly_GetById_GET = Warranty_Yearly_Master_Url;

// cost-coverage
const Warranty_Cost_Coverage_Master_Url = WARRANTY_URI + "cost-coverage";
export const Warranty_Cost_Coverage_Create_POST = Warranty_Cost_Coverage_Master_Url;

// ! Commerce-svc
const PARTS_CART_MASTER_URL = COMMERCE_REST_SERVICE + "parts/";
export const PARTS_ADD_TO_CART_POST = PARTS_CART_MASTER_URL + "add-to-cart";
export const PARTS_ADD_QUANTITY_TO_PARTS_CART_POST = PARTS_CART_MASTER_URL + "add-quantity-to-parts";
export const PARTS_GET_PARTS_QUANTITY_GET = PARTS_CART_MASTER_URL + "get-parts-quantity";
export const PARTS_GET_PARTS_CART_GET = PARTS_CART_MASTER_URL + "get-parts-cart";
export const PARTS_GET_ACTIVE_CART_GET = PARTS_CART_MASTER_URL + "get-active-cart";
export const PARTS_DELETE_PARTS_FROM_CART_DELETE = PARTS_CART_MASTER_URL + "delete-parts-from-cart";

// Parts-Order
export const PARTS_ORDER_MASTER_URL = COMMERCE_REST_SERVICE + "parts-order";
export const SEARCH_PARTS_ORDER_GET = PARTS_ORDER_MASTER_URL + "/search";

// address-service >> commerce
export const ADDRESS_MASTER_URL = COMMERCE_REST_SERVICE + "user/account/address";
// export const GET_ADDRESS_DETAILS_BY_ID_GET =  ADDRESS_MASTER_URL

// commerce-parts
export const PART_MASTER_URL_COMMERCE_SVC = COMMERCE_REST_SERVICE + "parts/parts/";
