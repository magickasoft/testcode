/**
** This file was generated automatically by @tinkoff/invest-types-generator
** do not try amending it manually
**/

export type affiliated_companyCreateRequest = {
    AffiliatedCompany?: modelAffiliatedCompany;
};

export type affiliated_companyCreateResponse = {
    AffiliatedCompany?: modelAffiliatedCompany;
};

export type affiliated_companyDeleteRequest = {
    AffiliatedCompany?: modelAffiliatedCompany;
};

export type affiliated_companyDeleteResponse = {};

export type affiliated_companyListRequest = {
    AffiliatedCompany?: modelAffiliatedCompany;
    _options?: optionsQueryOptions;
};

export type affiliated_companyListResponse = {
    records?: modelAffiliatedCompany[];
    total_count?: number;
};

export type affiliated_companyUpdateRequest = {
    AffiliatedCompany?: modelAffiliatedCompany;
};

export type affiliated_companyUpdateResponse = {
    AffiliatedCompany?: modelAffiliatedCompany;
};

export type annual_reviewCreateRequest = {
    AnnualReview?: modelAnnualReview;
};

export type annual_reviewCreateResponse = {
    AnnualReview?: modelAnnualReview;
};

export type annual_reviewDeleteRequest = {
    AnnualReview?: modelAnnualReview;
};

export type annual_reviewDeleteResponse = {};

export type annual_reviewListRequest = {
    AnnualReview?: modelAnnualReview;
    _options?: optionsQueryOptions;
};

export type annual_reviewListResponse = {
    records?: modelAnnualReview[];
    total_count?: number;
};

export type annual_reviewUpdateRequest = {
    AnnualReview?: modelAnnualReview;
};

export type annual_reviewUpdateResponse = {
    AnnualReview?: modelAnnualReview;
};

export type annual_review_sales_depositsCreateRequest = {
    AnnualReviewSalesDeposits?: modelAnnualReviewSalesDeposits;
};

export type annual_review_sales_depositsCreateResponse = {
    AnnualReviewSalesDeposits?: modelAnnualReviewSalesDeposits;
};

export type annual_review_sales_depositsDeleteRequest = {
    AnnualReviewSalesDeposits?: modelAnnualReviewSalesDeposits;
};

export type annual_review_sales_depositsDeleteResponse = {};

export type annual_review_sales_depositsListRequest = {
    AnnualReviewSalesDeposits?: modelAnnualReviewSalesDeposits;
    _options?: optionsQueryOptions;
};

export type annual_review_sales_depositsListResponse = {
    records?: modelAnnualReviewSalesDeposits[];
    total_count?: number;
};

export type annual_review_sales_depositsUpdateRequest = {
    AnnualReviewSalesDeposits?: modelAnnualReviewSalesDeposits;
};

export type annual_review_sales_depositsUpdateResponse = {
    AnnualReviewSalesDeposits?: modelAnnualReviewSalesDeposits;
};

export type bank_userCreateRequest = {
    BankUser?: modelBankUser;
};

export type bank_userCreateResponse = {
    BankUser?: modelBankUser;
};

export type bank_userListRequest = {
    BankUser?: modelBankUser;
    _options?: optionsQueryOptions;
};

export type bank_userListResponse = {
    records?: modelBankUser[];
    total_count?: number;
};

export type bank_userProfileResponse = {
    BankUser?: modelBankUser;
};

export type bank_userUpdateRequest = {
    BankUser?: modelBankUser;
};

export type bank_userUpdateResponse = {
    BankUser?: modelBankUser;
};

export type batchDeleteRequest = {
    BsaBatch?: modelBsaBatch;
};

export type batchDeleteResponse = {};

export type batchFormBatchRequest = {
    ctr_ids?: number[];
};

export type batchFormBatchResponse = {
    message?: string;
    s3_key?: string;
    status_code?: number;
};

export type batchListRequest = {
    BsaBatch?: modelBsaBatch;
    _options?: optionsQueryOptions;
};

export type batchListResponse = {
    records?: modelBsaBatch[];
    total_count?: number;
};

export type batchUpdateRequest = {
    BsaBatch?: modelBsaBatch;
};

export type batchUpdateResponse = {
    BsaBatch?: modelBsaBatch;
};

export type cifBatchCreateRequest = {
    records?: modelBsaCIFSubject[];
};

export type cifBatchCreateResponse = {
    records?: modelBsaCIFSubject[];
};

export type cifListRequest = {
    BsaCIFSubject?: modelBsaCIFSubject;
    _options?: optionsQueryOptions;
};

export type cifListResponse = {
    records?: modelBsaCIFSubject[];
    total_count?: number;
};

export type companyCreateRequest = {
    Company?: modelCompany;
};

export type companyCreateResponse = {
    Company?: modelCompany;
};

export type companyDeleteRequest = {
    Company?: modelCompany;
};

export type companyDeleteResponse = {};

export type companyListRequest = {
    Company?: modelCompany;
    _options?: optionsQueryOptions;
};

export type companyListResponse = {
    records?: modelCompany[];
    total_count?: number;
};

export type companyUpdateRequest = {
    Company?: modelCompany;
};

export type companyUpdateResponse = {
    Company?: modelCompany;
};

export type contactCreateRequest = {
    Contact?: modelContact;
};

export type contactCreateResponse = {
    Contact?: modelContact;
};

export type contactDeleteRequest = {
    Contact?: modelContact;
};

export type contactDeleteResponse = {};

export type contactListRequest = {
    Contact?: modelContact;
    _options?: optionsQueryOptions;
};

export type contactListResponse = {
    records?: modelContact[];
    total_count?: number;
};

export type contactUpdateRequest = {
    Contact?: modelContact;
};

export type contactUpdateResponse = {
    Contact?: modelContact;
};

export type contact_metadataCreateRequest = {
    ContactMetadata?: modelContactMetadata;
};

export type contact_metadataCreateResponse = {
    ContactMetadata?: modelContactMetadata;
};

export type contact_metadataDeleteRequest = {
    ContactMetadata?: modelContactMetadata;
};

export type contact_metadataDeleteResponse = {};

export type contact_metadataListRequest = {
    ContactMetadata?: modelContactMetadata;
    _options?: optionsQueryOptions;
};

export type contact_metadataListResponse = {
    records?: modelContactMetadata[];
    total_count?: number;
};

export type contact_metadataUpdateRequest = {
    ContactMetadata?: modelContactMetadata;
};

export type contact_metadataUpdateResponse = {
    ContactMetadata?: modelContactMetadata;
};

export type ctrCreateRequest = {
    BsaCtr?: modelBsaCtr;
};

export type ctrCreateResponse = {
    BsaCtr?: modelBsaCtr;
};

export type ctrDeleteRequest = {
    BsaCtr?: modelBsaCtr;
};

export type ctrDeleteResponse = {};

export type ctrListRequest = {
    BsaCtr?: modelBsaCtr;
    _options?: optionsQueryOptions;
};

export type ctrListResponse = {
    records?: modelBsaCtr[];
    total_count?: number;
};

export type ctrUpdateRequest = {
    BsaCtr?: modelBsaCtr;
};

export type ctrUpdateResponse = {
    BsaCtr?: modelBsaCtr;
};

export type customerCreateRequest = {
    Customer?: modelCustomer;
};

export type customerCreateResponse = {
    Customer?: modelCustomer;
};

export type customerDeleteRequest = {
    Customer?: modelCustomer;
};

export type customerDeleteResponse = {};

export type customerListRequest = {
    Customer?: modelCustomer;
    _options?: optionsQueryOptions;
};

export type customerListResponse = {
    records?: modelCustomer[];
    total_count?: number;
};

export type customerUpdateRequest = {
    Customer?: modelCustomer;
};

export type customerUpdateResponse = {
    Customer?: modelCustomer;
};

export type ddaBatchCreateRequest = {
    records?: modelBsaDDASubject[];
};

export type ddaBatchCreateResponse = {
    records?: modelBsaDDASubject[];
};

export type decimalNullDecimal = {
    Decimal?: number;
    Valid?: boolean;
};

export type documentCreateMissingRequest = {
    entity?: string;
    id?: number;
};

export type documentCreateRequest = {
    Document?: modelDocument;
};

export type documentCreateResponse = {
    Document?: modelDocument;
};

export type documentDeleteRequest = {
    Document?: modelDocument;
};

export type documentDeleteResponse = {};

export type documentListRequest = {
    Document?: modelDocument;
    _options?: optionsQueryOptions;
};

export type documentListResponse = {
    records?: modelDocument[];
    total_count?: number;
};

export type documentUpdateRequest = {
    Document?: modelDocument;
};

export type documentUpdateResponse = {
    Document?: modelDocument;
};

export type document_fileCreateRequest = {
    DocumentFile?: modelDocumentFile;
};

export type document_fileCreateResponse = {
    DocumentFile?: modelDocumentFile;
};

export type document_fileDeleteRequest = {
    DocumentFile?: modelDocumentFile;
};

export type document_fileDeleteResponse = {};

export type document_fileDownloadRequest = {
    DocumentFile?: modelDocumentFile;
    _options?: optionsQueryOptions;
};

export type document_fileDownloadResponse = {
    file_id?: number;
    link?: string;
};

export type document_fileListRequest = {
    DocumentFile?: modelDocumentFile;
    _options?: optionsQueryOptions;
};

export type document_fileListResponse = {
    records?: modelDocumentFile[];
    total_count?: number;
};

export type document_fileUpdateRequest = {
    DocumentFile?: modelDocumentFile;
};

export type document_fileUpdateResponse = {
    DocumentFile?: modelDocumentFile;
};

export type document_periodAlertsRequest = {
    _options?: optionsQueryOptions;
    company_id?: number;
    days_before_expiration?: number;
    document_name?: string;
    frequency?: string;
    internal?: boolean;
    license_id?: number;
};

export type document_periodAlertsResponse = {
    records?: document_periodAlertsResponseItem[];
    total_count?: number;
};

export type document_periodAlertsResponseItem = {
    company_id?: number;
    delivered_at?: string;
    document_id?: number;
    document_name?: string;
    document_period_id?: number;
    end_date?: string;
    frequency?: string;
    internal?: boolean;
    license_id?: number;
    start_date?: string;
    status?: string;
};

export type document_periodCreateRequest = {
    DocumentPeriod?: modelDocumentPeriod;
};

export type document_periodCreateResponse = {
    DocumentPeriod?: modelDocumentPeriod;
};

export type document_periodDeleteRequest = {
    DocumentPeriod?: modelDocumentPeriod;
};

export type document_periodDeleteResponse = {};

export type document_periodListRequest = {
    DocumentPeriod?: modelDocumentPeriod;
    _options?: optionsQueryOptions;
};

export type document_periodListResponse = {
    records?: modelDocumentPeriod[];
    total_count?: number;
};

export type document_periodUpdateRequest = {
    DocumentPeriod?: modelDocumentPeriod;
};

export type document_periodUpdateResponse = {
    DocumentPeriod?: modelDocumentPeriod;
};

export type document_templateBatchCreateRequest = {
    templates?: modelDocumentTemplate[];
};

export type document_templateBatchCreateResponse = {
    templates?: modelDocumentTemplate[];
};

export type document_templateCreateRequest = {
    DocumentTemplate?: modelDocumentTemplate;
};

export type document_templateCreateResponse = {
    DocumentTemplate?: modelDocumentTemplate;
};

export type document_templateDeleteRequest = {
    DocumentTemplate?: modelDocumentTemplate;
};

export type document_templateDeleteResponse = {};

export type document_templateListRequest = {
    DocumentTemplate?: modelDocumentTemplate;
    _options?: optionsQueryOptions;
};

export type document_templateListResponse = {
    records?: modelDocumentTemplate[];
    total_count?: number;
};

export type document_templateUpdateRequest = {
    DocumentTemplate?: modelDocumentTemplate;
};

export type document_templateUpdateResponse = {
    DocumentTemplate?: modelDocumentTemplate;
};

export type go_nullFloat64 = {
    f?: number;
    null?: boolean;
    valid?: boolean;
};

export type historyList = {
    Items?: modelHistory[];
};

export type historyListRequest = {
    History?: modelHistory;
    _options?: optionsQueryOptions;
};

export type historyListResponse = {
    records?: historyList;
    total_count?: number;
};

export type internal_transferCreateRequest = {
    InternalTransfer?: modelInternalTransfer;
};

export type internal_transferCreateResponse = {
    InternalTransfer?: modelInternalTransfer;
};

export type internal_transferDeleteRequest = {
    InternalTransfer?: modelInternalTransfer;
};

export type internal_transferDeleteResponse = {};

export type internal_transferListRequest = {
    InternalTransfer?: modelInternalTransfer;
    _options?: optionsQueryOptions;
};

export type internal_transferListResponse = {
    records?: modelInternalTransfer[];
    total_count?: number;
};

export type internal_transferUpdateRequest = {
    InternalTransfer?: modelInternalTransfer;
};

export type internal_transferUpdateResponse = {
    InternalTransfer?: modelInternalTransfer;
};

export type internal_transfers_exportCreateRequest = {
    InternalTransfersExport?: modelInternalTransfersExport;
};

export type internal_transfers_exportCreateResponse = {
    InternalTransfersExport?: modelInternalTransfersExport;
};

export type internal_transfers_exportDeleteRequest = {
    InternalTransfersExport?: modelInternalTransfersExport;
};

export type internal_transfers_exportDeleteResponse = {};

export type internal_transfers_exportListRequest = {
    InternalTransfersExport?: modelInternalTransfersExport;
    _options?: optionsQueryOptions;
};

export type internal_transfers_exportListResponse = {
    records?: modelInternalTransfersExport[];
    total_count?: number;
};

export type internal_transfers_exportUpdateRequest = {
    InternalTransfersExport?: modelInternalTransfersExport;
};

export type internal_transfers_exportUpdateResponse = {
    InternalTransfersExport?: modelInternalTransfersExport;
};

export type invoice_submittalCreateRequest = {
    InvoiceSubmittal?: modelInvoiceSubmittal;
};

export type invoice_submittalCreateResponse = {
    InvoiceSubmittal?: modelInvoiceSubmittal;
};

export type invoice_submittalDeleteRequest = {
    InvoiceSubmittal?: modelInvoiceSubmittal;
};

export type invoice_submittalDeleteResponse = {};

export type invoice_submittalListRequest = {
    InvoiceSubmittal?: modelInvoiceSubmittal;
    _options?: optionsQueryOptions;
};

export type invoice_submittalListResponse = {
    records?: modelInvoiceSubmittal[];
    total_count?: number;
};

export type invoice_submittalUpdateRequest = {
    InvoiceSubmittal?: modelInvoiceSubmittal;
};

export type invoice_submittalUpdateResponse = {
    InvoiceSubmittal?: modelInvoiceSubmittal;
};

export type licenseCreateRequest = {
    License?: modelLicense;
};

export type licenseCreateResponse = {
    License?: modelLicense;
};

export type licenseDeleteRequest = {
    License?: modelLicense;
};

export type licenseDeleteResponse = {};

export type licenseListRequest = {
    License?: modelLicense;
    _options?: optionsQueryOptions;
};

export type licenseListResponse = {
    records?: modelLicense[];
    total_count?: number;
};

export type licenseUpdateRequest = {
    License?: modelLicense;
};

export type licenseUpdateResponse = {
    License?: modelLicense;
};

export type map = {};

export type modelAffiliatedCompany = {
    child_company_id?: number;
    created_at?: string;
    deleted_at?: string;
    id?: number;
    notes?: string;
    parent_company_id?: number;
    sf_external_id?: string;
    updated_at?: string;
};

export type modelAnnualReview = {
    company_id?: number;
    completed_date?: string;
    created_at?: string;
    deleted_at?: string;
    financials_end_date?: string;
    id?: number;
    last_ar_date?: string;
    questionnaire?: string;
    sf_external_id?: string;
    status?: string;
    updated_at?: string;
};

export type modelAnnualReviewSalesDeposits = {
    annual_review_id?: number;
    chart_s3_key?: string;
    created_at?: string;
    deleted_at?: string;
    id?: number;
    license_id?: number;
    quarter1_info?: modelAnnualReviewSalesDepositsQuarterInfo;
    quarter2_info?: modelAnnualReviewSalesDepositsQuarterInfo;
    quarter3_info?: modelAnnualReviewSalesDepositsQuarterInfo;
    quarter4_info?: modelAnnualReviewSalesDepositsQuarterInfo;
    sf_external_id?: string;
    status?: string;
    total_financials?: go_nullFloat64;
    updated_at?: string;
};

export type modelAnnualReviewSalesDepositsQuarterInfo = {
    cash?: number;
    checks?: number;
    credit_debit?: number;
    deposits?: number;
    invoices?: number;
    label?: string;
    metrc?: number;
    other?: number;
    pos?: number;
    transfers?: number;
};

export type modelBankUser = {
    active?: boolean;
    created_at?: string;
    deleted_at?: string;
    email?: string;
    first_name?: string;
    id?: string;
    language?: string;
    last_login?: string;
    last_name?: string;
    mfa_required?: boolean;
    organization_id?: number;
    permissions?: string[];
    profile?: string;
    sf_id?: string;
    time_zone?: string;
    updated_at?: string;
};

export type modelBatchInfo = {
    acknowledgments_key?: string;
    batch_id?: number;
    ctrx_pdf_key?: string;
    filing_name?: string;
    seq_num?: number;
    status?: string;
    tracking_id?: string;
    updated_at?: string;
    xml_key?: string;
};

export type modelBsaBatch = {
    acknowledgments_key?: string;
    created_at?: string;
    ctrs_info?: modelBsaCtrBatch[];
    ctrx_pdf_key?: string;
    deleted_at?: string;
    end_date?: string;
    filing_name?: string;
    id?: number;
    organization_id?: number;
    record_count?: number;
    start_date?: string;
    status?: string;
    tracking_id?: string;
    type?: string;
    updated_at?: string;
    xml_key?: string;
};

export type modelBsaCIFSubject = {
    address?: string;
    alternate_name?: string;
    attentions?: string;
    birthdate?: string;
    branch_id?: number;
    business_type?: string;
    cif?: string;
    city?: string;
    common_carrier?: boolean;
    country?: string;
    created_at?: string;
    email?: string;
    entity_name?: string;
    first_name?: string;
    gender?: string;
    id?: number;
    id_country?: string;
    id_form?: string;
    id_form_other?: string;
    id_number?: string;
    id_state?: string;
    last_name?: string;
    middle_name?: string;
    naics_code?: string;
    organization_id?: number;
    phone?: string;
    phone_ext?: string;
    postal_code?: string;
    state?: string;
    suffix?: string;
    tin?: string;
    tin_type?: string;
    updated_at?: string;
};

export type modelBsaCtr = {
    attention?: string;
    batches_info?: modelBatchInfo[];
    created_at?: string;
    custom?: boolean;
    deleted_at?: string;
    filed_date?: string;
    filing_name?: string;
    filing_type?: string;
    fincen_warnings?: string;
    id?: number;
    institution_contact_info?: modelBsaCtrInstitutionContactInfo;
    name_desc?: string;
    notes?: string;
    organization_id?: number;
    persons_info?: modelBsaCtrPersonInfo[];
    prior_report_bsa_id?: string;
    status?: string;
    trans_date?: string;
    transaction_info?: modelBsaCtrTransactionInfo;
    transaction_locations_info?: modelBsaCtrTransactionLocationInfo[];
    transactions?: modelBsaTransaction[];
    updated_at?: string;
};

export type modelBsaCtrAccountNumbers = {
    value?: string;
};

export type modelBsaCtrBatch = {
    batch_id?: number;
    created_at?: string;
    ctr_id?: number;
    ctr_name?: string;
    ctr_status?: string;
    deleted_at?: string;
    id?: number;
    seq_num?: number;
    updated_at?: string;
};

export type modelBsaCtrInstitutionContactInfo = {
    address?: string;
    city?: string;
    contact_office?: string;
    country?: string;
    dba?: string;
    ein?: string;
    federal_regulator?: string;
    id_number?: string;
    id_type?: string;
    legal_name?: string;
    phone?: string;
    phone_ext?: string;
    state?: string;
    type?: string;
    type_other?: string;
    zip_code?: string;
};

export type modelBsaCtrPersonInfo = {
    account_numbers_in?: modelBsaCtrAccountNumbers[];
    account_numbers_out?: modelBsaCtrAccountNumbers[];
    address?: string;
    alternate_name?: string;
    birthdate?: string;
    business_type?: string;
    cash_in?: number;
    cash_out?: number;
    city?: string;
    country?: string;
    email?: string;
    entity_name?: string;
    first_name?: string;
    gender?: string;
    id_country?: string;
    id_form?: string;
    id_form_other?: string;
    id_number?: string;
    id_state?: string;
    is_entity?: boolean;
    last_name?: string;
    middle_name?: string;
    multiple_transactions?: boolean;
    naics_code?: string;
    phone?: string;
    phone_ext?: string;
    postal_code?: string;
    state?: string;
    suffix?: string;
    tin?: string;
    tin_type?: string;
    type?: string;
};

export type modelBsaCtrTransactionForeignInfo = {
    cash?: number;
    country?: string;
};

export type modelBsaCtrTransactionInfo = {
    cash_in_a?: number;
    cash_in_b?: number;
    cash_in_c?: number;
    cash_in_d?: number;
    cash_in_e?: number;
    cash_in_f?: number;
    cash_in_g?: number;
    cash_in_h?: number;
    cash_in_i?: number;
    cash_in_total?: number;
    cash_in_z?: number;
    cash_in_z_type?: string;
    cash_out_a?: number;
    cash_out_b?: number;
    cash_out_c?: number;
    cash_out_d?: number;
    cash_out_e?: number;
    cash_out_f?: number;
    cash_out_g?: number;
    cash_out_h?: number;
    cash_out_i?: number;
    cash_out_j?: number;
    cash_out_total?: number;
    cash_out_z?: number;
    cash_out_z_type?: string;
    foreign_Out?: modelBsaCtrTransactionForeignInfo[];
    foreign_in?: modelBsaCtrTransactionForeignInfo[];
    source_aggregated?: boolean;
    source_armored?: boolean;
    source_atm?: boolean;
    source_mail?: boolean;
    source_night?: boolean;
    source_shared_branching?: boolean;
    transaction_date?: string;
};

export type modelBsaCtrTransactionLocationInfo = {
    address?: string;
    cash_in?: number;
    cash_out?: number;
    city?: string;
    country?: string;
    dba?: string;
    ein?: string;
    federal_regulator?: string;
    id_number?: string;
    id_type?: string;
    legal_name?: string;
    state?: string;
    type?: string;
    type_other?: string;
    zip_code?: string;
};

export type modelBsaDDASubject = {
    CIF?: string;
    DdaAccountNumber?: string;
    Exempt?: boolean;
    ID?: number;
    Joint?: boolean;
    Name?: string;
    OrganizationID?: number;
    TIN?: string;
    created_at?: string;
    updated_at?: string;
};

export type modelBsaSetting = {
    created_at?: string;
    deleted_at?: string;
    id?: number;
    institution_info?: modelBsaCtrInstitutionContactInfo;
    organization_id?: number;
    tellers_branch?: any;
    transaction_locations_info?: modelInstitutionBranchInfo[];
    transmitter_info?: modelTransmitterInfo;
    updated_at?: string;
};

export type modelBsaTransaction = {
    acct_avail?: go_nullFloat64;
    acct_tin?: string;
    amount?: go_nullFloat64;
    cif_acct?: string;
    comment?: string;
    created_at?: string;
    deleted_at?: string;
    description?: string;
    description_primary?: string;
    from_cd?: string;
    id_hash?: string;
    organization_id?: number;
    post_date?: string;
    post_datetime?: string;
    source?: string;
    status?: string;
    teller?: string;
    to_cd?: string;
    tran_id?: string;
    type?: string;
    updated_at?: string;
};

export type modelCompany = {
    accountingSyncStatus?: string;
    active?: boolean;
    bankSyncStatus?: string;
    business_type?: string;
    cif?: string;
    city?: string;
    country?: string;
    created_at?: string;
    customer_status?: string;
    dateFounded?: string;
    dba?: string;
    deleted_at?: string;
    description?: string;
    ein?: string;
    employees?: number;
    entity_type?: string;
    fax?: string;
    hasAccountingPlatform?: boolean;
    holding_id?: number;
    id?: number;
    is_holding?: boolean;
    lastAccountingSyncAt?: string;
    lastBankSyncAt?: string;
    lastManualDataUpdateAt?: string;
    legal_name?: string;
    name?: string;
    organization_id?: number;
    phone?: string;
    postal_code?: string;
    primaryDataSource?: string;
    report_alerts_criteria?: go_nullFloat64;
    reportedAccountingPlatform?: string;
    reportedAccountingPlatformUpdateFrequency?: string;
    requiredApprovalsCount?: number;
    sf_acc_id?: string;
    state?: string;
    stateFounded?: string;
    street?: string;
    updated_at?: string;
    website?: string;
};

export type modelContact = {
    birthdate?: string;
    city?: string;
    country?: string;
    created_at?: string;
    deleted_at?: string;
    ein_ssn?: string;
    email?: string;
    entity_name?: string;
    first_name?: string;
    id?: number;
    is_documents?: boolean;
    is_financials?: boolean;
    last_name?: string;
    mobile_phone?: string;
    organization_id?: number;
    phone?: string;
    sf_external_id?: string;
    state?: string;
    street?: string;
    title?: string;
    updated_at?: string;
    zip_code?: string;
};

export type modelContactMetadata = {
    company_id?: number;
    contact_id?: number;
    created_at?: string;
    deleted_at?: string;
    id?: number;
    is_account_signer?: boolean;
    is_debtholder?: boolean;
    is_owner?: boolean;
    ownership?: go_nullFloat64;
    sf_external_id?: string;
    updated_at?: string;
};

export type modelCustomer = {
    address?: string;
    city?: string;
    company_id?: number;
    created_at?: string;
    deleted_at?: string;
    email?: string;
    external_id?: string;
    id?: number;
    name?: string;
    phone?: string;
    sf_external_id?: string;
    state?: string;
    updated_at?: string;
    zip_code?: string;
};

export type modelDocument = {
    company_id?: number;
    created_at?: string;
    deleted_at?: string;
    document_template_id?: number;
    expiration_delay_days?: number;
    frequency?: string;
    id?: number;
    initialized?: boolean;
    internal?: boolean;
    license_id?: number;
    name?: string;
    start_date_type?: string;
    updated_at?: string;
};

export type modelDocumentFile = {
    created_at?: string;
    deleted_at?: string;
    document_period_id?: number;
    id?: number;
    name?: string;
    notes?: string;
    s3_key?: string;
    status?: string;
    updated_at?: string;
};

export type modelDocumentPeriod = {
    created_at?: string;
    deleted_at?: string;
    delivered_at?: string;
    document_id?: number;
    end_date?: string;
    id?: number;
    is_legacy?: boolean;
    next_created?: boolean;
    notes?: string;
    start_date?: string;
    status?: string;
    updated_at?: string;
};

export type modelDocumentTemplate = {
    active?: boolean;
    ancillary?: boolean;
    corporation?: boolean;
    created_at?: string;
    deleted_at?: string;
    expiration_delay_days?: number;
    frequency?: string;
    hemp?: boolean;
    id?: number;
    internal?: boolean;
    investment?: boolean;
    level?: string;
    license_dispensary?: boolean;
    license_grower?: boolean;
    license_medical?: boolean;
    license_processor?: boolean;
    license_recreational?: boolean;
    llc?: boolean;
    mrb?: boolean;
    mrb_related?: boolean;
    name?: string;
    organization_id?: number;
    partnership?: boolean;
    sole_proprietor?: boolean;
    start_date_type?: string;
    type?: string;
    updated_at?: string;
};

export type modelHistory = {
    action?: number;
    comment?: string;
    created_at?: string;
    entity_id?: number;
    entity_type?: number;
    id?: number;
    new?: any;
    old?: any;
    organization_id?: number;
    user_id?: string;
    user_type?: number;
};

export type modelInstitutionBranchInfo = {
    address?: string;
    city?: string;
    country?: string;
    dba?: string;
    ein?: string;
    federal_regulator?: string;
    id?: number;
    id_number?: string;
    id_type?: string;
    legal_name?: string;
    state?: string;
    type?: string;
    type_other?: string;
    zip_code?: string;
};

export type modelInternalTransfer = {
    amount?: go_nullFloat64;
    approval_date?: string;
    approvals_count?: number;
    created_at?: string;
    date?: string;
    deleted_at?: string;
    export_id?: number;
    history?: modelInternalTransferHistoryItem[];
    id?: number;
    manifest_number?: string;
    notes?: string;
    recipient_license_id?: number;
    required_approvals_count?: number;
    sender_license_id?: number;
    sf_external_id?: string;
    status?: string;
    updated_at?: string;
};

export type modelInternalTransferHistoryItem = {
    action?: string;
    actionMilliseconds?: number;
    email?: string;
    uid?: string;
    username?: string;
};

export type modelInternalTransfersExport = {
    created_at?: string;
    credit_file_s3_key?: string;
    debit_file_s3_key?: string;
    deleted_at?: string;
    id?: number;
    organization_id?: number;
    processing_date?: string;
    sf_external_id?: string;
    status?: string;
    updated_at?: string;
};

export type modelInvoiceSubmittal = {
    amount?: go_nullFloat64;
    created_at?: string;
    date?: string;
    deleted_at?: string;
    file_keys?: string;
    id?: number;
    license_id?: number;
    manifest_number?: string;
    notes?: string;
    sf_external_id?: string;
    updated_at?: string;
};

export type modelLicense = {
    account_opening_date?: string;
    bank_account?: string;
    city?: string;
    city_tax?: go_nullFloat64;
    company_id?: number;
    county_tax?: go_nullFloat64;
    created_at?: string;
    deleted_at?: string;
    expiration_date?: string;
    id?: number;
    internal_transfers?: boolean;
    issue_date?: string;
    license_number?: string;
    mj_retail_tax?: go_nullFloat64;
    name?: string;
    phone?: string;
    pos_type?: string;
    postal_code?: string;
    sf_external_id?: string;
    special_tax?: go_nullFloat64;
    state?: string;
    state_tax?: go_nullFloat64;
    street_address?: string;
    subtype?: string;
    type?: string;
    updated_at?: string;
};

export type modelOrganization = {
    SFOrgID?: string;
    State?: string;
    createdAt?: string;
    id?: number;
    name?: string;
    royaltyMultiplier?: decimalNullDecimal;
    type?: string;
    updatedAt?: string;
};

export type modelOrganizationReportSetting = {
    period?: string;
    retail?: modelOrganizationReportTypeSetting;
    wholesale?: modelOrganizationReportTypeSetting;
};

export type modelOrganizationReportTypeSetting = {
    prod_amount?: boolean;
    prod_per_qty?: boolean;
    prod_qty?: boolean;
    sales_amount?: boolean;
    sales_per_qty?: boolean;
    sales_pos?: boolean;
    sales_qty?: boolean;
    tax?: boolean;
};

export type modelOrganizationSetting = {
    audit_companies_ids?: number[];
    aws_s3_accesskey?: string;
    aws_s3_bucket_name?: string;
    aws_s3_secretkey?: string;
    aws_sns_topic_arn?: string;
    bank_document_first_notification_before_expiration?: number;
    bank_document_last_notification_before_expiration?: number;
    bank_documents_start_date?: string;
    bank_notification_emails?: string;
    created_at?: string;
    deleted_at?: string;
    enable_bsa?: boolean;
    enable_internal_transfers?: boolean;
    exam_companies_ids?: number[];
    id?: number;
    license_document_template_ids?: string;
    metrc_vendor_key?: string;
    metrc_state?: string;
    organization_id?: number;
    report_alerts_criteria?: go_nullFloat64;
    report_alerts_criteria_abs?: go_nullFloat64;
    report_completion_day?: number;
    report_setting?: modelOrganizationReportSetting;
    state_inventory_control_system?: string;
    tax_period?: string;
    updated_at?: string;
};

export type modelReportProductData = {
    changes?: modelReportProductDataValues;
    values?: modelReportProductDataValues;
};

export type modelReportProductDataValues = {
    bud_per_qty?: number;
    bud_qty?: number;
    bud_sold?: number;
    concentrate_per_qty?: number;
    concentrate_qty?: number;
    concentrate_sold?: number;
    infused_edible_per_qty?: number;
    infused_edible_qty?: number;
    infused_edible_sold?: number;
    infused_nonedible_per_qty?: number;
    infused_nonedible_qty?: number;
    infused_nonedible_sold?: number;
    other_per_qty?: number;
    other_qty?: number;
    other_sold?: number;
    plants_per_qty?: number;
    plants_qty?: number;
    plants_sold?: number;
    shake_trim_per_qty?: number;
    shake_trim_qty?: number;
    shake_trim_sold?: number;
    total_per_qty?: number;
    total_qty?: number;
    total_sold?: number;
};

export type modelReportRetail = {
    common_alert_criteria?: go_nullFloat64;
    common_alert_criteria_abs?: go_nullFloat64;
    created_at?: string;
    deleted_at?: string;
    fetched_bank?: boolean;
    fetched_metrc?: boolean;
    fetched_pos?: boolean;
    id?: number;
    license_id?: number;
    notes?: string;
    peer_group?: modelReportProductData;
    product_current_month?: modelReportProductData;
    product_prior_3_month?: modelReportProductData;
    product_prior_month?: modelReportProductData;
    quarterly?: boolean;
    ready?: boolean;
    sales_current_month?: modelReportRetailSalesData;
    sales_metrc_comparison?: modelReportSalesMetrcComparison;
    sales_pos_comparison?: modelReportRetailSalesPOSComparison;
    sales_prior_3_month?: modelReportRetailSalesData;
    sales_prior_month?: modelReportRetailSalesData;
    sf_external_id?: string;
    sources?: any;
    start_date?: string;
    status?: string;
    updated_at?: string;
};

export type modelReportRetailSalesData = {
    changes?: modelReportRetailSalesDataValues;
    values?: modelReportRetailSalesDataValues;
};

export type modelReportRetailSalesDataValues = {
    atm_load_per_qty?: number;
    atm_load_qty?: number;
    atm_load_sold?: number;
    cash_per_qty?: number;
    cash_qty?: number;
    cash_sold?: number;
    credit_debit_per_qty?: number;
    credit_debit_qty?: number;
    credit_debit_sold?: number;
    internal_transfers_per_qty?: number;
    internal_transfers_qty?: number;
    internal_transfers_sold?: number;
    invoices_per_qty?: number;
    invoices_qty?: number;
    invoices_sold?: number;
    other_per_qty?: number;
    other_qty?: number;
    other_sold?: number;
    total_per_qty?: number;
    total_qty?: number;
    total_sold?: number;
};

export type modelReportRetailSalesPOSComparison = {
    changes_abs?: modelReportRetailSalesPOSComparisonValues;
    changes_rel?: modelReportRetailSalesPOSComparisonValues;
    values?: modelReportRetailSalesPOSComparisonValues;
};

export type modelReportRetailSalesPOSComparisonValues = {
    cash?: number;
    credit_debit?: number;
    other?: number;
    total?: number;
};

export type modelReportSalesMetrcComparison = {
    changes_abs?: number;
    changes_rel?: number;
    metrc?: number;
    submitted?: number;
};

export type modelReportTaxReconciliation = {
    common_alert_criteria?: go_nullFloat64;
    common_alert_criteria_abs?: go_nullFloat64;
    created_at?: string;
    current_month?: modelReportTaxReconciliationData;
    deleted_at?: string;
    fetched_bank?: boolean;
    fetched_pos?: boolean;
    id?: number;
    license_id?: number;
    notes?: string;
    ready?: boolean;
    sf_external_id?: string;
    start_date?: string;
    status?: string;
    updated_at?: string;
};

export type modelReportTaxReconciliationData = {
    calculated?: modelReportTaxReconciliationDataValues;
    changes_abs?: modelReportTaxReconciliationDataValues;
    changes_rel?: modelReportTaxReconciliationDataValues;
    collected?: modelReportTaxReconciliationDataValues;
};

export type modelReportTaxReconciliationDataValues = {
    total?: number;
};

export type modelReportWholesale = {
    common_alert_criteria?: go_nullFloat64;
    common_alert_criteria_abs?: go_nullFloat64;
    created_at?: string;
    deleted_at?: string;
    fetched_bank?: boolean;
    fetched_metrc?: boolean;
    id?: number;
    license_id?: number;
    notes?: string;
    product_current_month?: modelReportProductData;
    product_peer_group?: modelReportProductData;
    product_prior_3_month?: modelReportProductData;
    product_prior_month?: modelReportProductData;
    quarterly?: boolean;
    ready?: boolean;
    sales_current_month?: modelReportWholesaleSalesData;
    sales_metrc_comparison?: modelReportSalesMetrcComparison;
    sales_prior_3_month?: modelReportWholesaleSalesData;
    sales_prior_month?: modelReportWholesaleSalesData;
    sf_external_id?: string;
    sources?: any;
    start_date?: string;
    status?: string;
    updated_at?: string;
};

export type modelReportWholesaleSalesData = {
    changes?: modelReportWholesaleSalesDataValues;
    values?: modelReportWholesaleSalesDataValues;
};

export type modelReportWholesaleSalesDataValues = {
    cash_per_qty?: number;
    cash_qty?: number;
    cash_sold?: number;
    checks_per_qty?: number;
    checks_qty?: number;
    checks_sold?: number;
    internal_transfers_per_qty?: number;
    internal_transfers_qty?: number;
    internal_transfers_sold?: number;
    invoices_per_qty?: number;
    invoices_qty?: number;
    invoices_sold?: number;
    other_per_qty?: number;
    other_qty?: number;
    other_sold?: number;
    total_per_qty?: number;
    total_qty?: number;
    total_sold?: number;
};

export type modelTransmitterInfo = {
    city?: string;
    contact_name?: string;
    country?: string;
    name?: string;
    phone?: string;
    state?: string;
    street?: string;
    tcc?: string;
    tin?: string;
    zip_code?: string;
};

export type modelVendor = {
    address?: string;
    city?: string;
    company_id?: number;
    created_at?: string;
    deleted_at?: string;
    email?: string;
    external_id?: string;
    id?: number;
    name?: string;
    phone?: string;
    sf_external_id?: string;
    state?: string;
    updated_at?: string;
    website?: string;
    zip_code?: string;
};

export type modelWebpagesDocument = {
    WebpagesDocumentFields?: modelWebpagesDocumentFields;
    alerted_document_periods?: modelWebpagesDocumentPeriodAlerted[];
    company_name?: string;
    expiration_date?: string;
    license_name?: string;
};

export type modelWebpagesDocumentFields = {
    company_id?: number;
    created_at?: string;
    deleted_at?: string;
    document_template_id?: number;
    expiration_delay_days?: number;
    frequency?: string;
    id?: number;
    initialized?: boolean;
    internal?: boolean;
    license_id?: number;
    name?: string;
    start_date_type?: string;
    updated_at?: string;
};

export type modelWebpagesDocumentPeriodAlerted = {
    DocumentPeriod?: modelDocumentPeriod;
    expiration_date?: string;
    files?: modelDocumentFile[];
};

export type optionsFilter = {
    field?: string;
    type?: string;
    value?: any;
};

export type optionsOrder = {
    direction?: string;
    field?: string;
};

export type optionsQueryOptions = {
    filters?: optionsFilter[];
    limit?: number;
    offset?: number;
    orders?: optionsOrder[];
};

export type organizationListRequest = {
    Organization?: modelOrganization;
    _options?: optionsQueryOptions;
};

export type organizationUpdateRequest = {
    Organization?: modelOrganization;
};

export type organizationUpdateResponse = {
    Organization?: modelOrganization;
};

export type organization_settingCreateRequest = {
    OrganizationSetting?: modelOrganizationSetting;
};

export type organization_settingCreateResponse = {
    OrganizationSetting?: modelOrganizationSetting;
};

export type organization_settingDeleteRequest = {
    OrganizationSetting?: modelOrganizationSetting;
};

export type organization_settingDeleteResponse = {};

export type organization_settingListRequest = {
    OrganizationSetting?: modelOrganizationSetting;
    _options?: optionsQueryOptions;
};

export type organization_settingListResponse = {
    records?: modelOrganizationSetting[];
    total_count?: number;
};

export type organization_settingUpdateRequest = {
    OrganizationSetting?: modelOrganizationSetting;
};

export type organization_settingUpdateResponse = {
    OrganizationSetting?: modelOrganizationSetting;
};

export type report_retailCreateRequest = {
    ReportRetail?: modelReportRetail;
};

export type report_retailCreateResponse = {
    ReportRetail?: modelReportRetail;
};

export type report_retailDeleteRequest = {
    ReportRetail?: modelReportRetail;
};

export type report_retailDeleteResponse = {};

export type report_retailListRequest = {
    ReportRetail?: modelReportRetail;
    _options?: optionsQueryOptions;
};

export type report_retailListResponse = {
    records?: modelReportRetail[];
    total_count?: number;
};

export type report_retailUpdateRequest = {
    ReportRetail?: modelReportRetail;
};

export type report_retailUpdateResponse = {
    ReportRetail?: modelReportRetail;
};

export type report_tax_reconciliationCreateRequest = {
    ReportTaxReconciliation?: modelReportTaxReconciliation;
};

export type report_tax_reconciliationCreateResponse = {
    ReportTaxReconciliation?: modelReportTaxReconciliation;
};

export type report_tax_reconciliationDeleteRequest = {
    ReportTaxReconciliation?: modelReportTaxReconciliation;
};

export type report_tax_reconciliationDeleteResponse = {};

export type report_tax_reconciliationListRequest = {
    ReportTaxReconciliation?: modelReportTaxReconciliation;
    _options?: optionsQueryOptions;
};

export type report_tax_reconciliationListResponse = {
    records?: modelReportTaxReconciliation[];
    total_count?: number;
};

export type report_wholesaleCreateRequest = {
    ReportWholesale?: modelReportWholesale;
};

export type report_wholesaleCreateResponse = {
    ReportWholesale?: modelReportWholesale;
};

export type report_wholesaleDeleteRequest = {
    ReportWholesale?: modelReportWholesale;
};

export type report_wholesaleDeleteResponse = {};

export type report_wholesaleListRequest = {
    ReportWholesale?: modelReportWholesale;
    _options?: optionsQueryOptions;
};

export type report_wholesaleListResponse = {
    records?: modelReportWholesale[];
    total_count?: number;
};

export type report_wholesaleUpdateRequest = {
    ReportWholesale?: modelReportWholesale;
};

export type report_wholesaleUpdateResponse = {
    ReportWholesale?: modelReportWholesale;
};

export type settingCreateRequest = {
    BsaSetting?: modelBsaSetting;
};

export type settingCreateResponse = {
    BsaSetting?: modelBsaSetting;
};

export type settingDeleteRequest = {
    BsaSetting?: modelBsaSetting;
};

export type settingDeleteResponse = {};

export type settingListRequest = {
    BsaSetting?: modelBsaSetting;
    _options?: optionsQueryOptions;
};

export type settingUpdateRequest = {
    BsaSetting?: modelBsaSetting;
};

export type settingUpdateResponse = {
    BsaSetting?: modelBsaSetting;
};

export type transactionCreateRequest = {
    BsaTransaction?: modelBsaTransaction;
};

export type transactionCreateResponse = {
    BsaTransaction?: modelBsaTransaction;
};

export type transactionDeleteRequest = {
    BsaTransaction?: modelBsaTransaction;
};

export type transactionDeleteResponse = {};

export type transactionListRequest = {
    BsaTransaction?: modelBsaTransaction;
    _options?: optionsQueryOptions;
};

export type transactionListResponse = {
    records?: modelBsaTransaction[];
    total_count?: number;
};

export type transactionUpdateRequest = {
    BsaTransaction?: modelBsaTransaction;
};

export type transactionUpdateResponse = {
    BsaTransaction?: modelBsaTransaction;
};

export type vendorsCreateRequest = {
    Vendor?: modelVendor;
};

export type vendorsCreateResponse = {
    Vendor?: modelVendor;
};

export type vendorsDeleteRequest = {
    Vendor?: modelVendor;
};

export type vendorsDeleteResponse = {};

export type vendorsListRequest = {
    Vendor?: modelVendor;
    _options?: optionsQueryOptions;
};

export type vendorsListResponse = {
    records?: modelVendor[];
    total_count?: number;
};

export type vendorsUpdateRequest = {
    Vendor?: modelVendor;
};

export type vendorsUpdateResponse = {
    Vendor?: modelVendor;
};

export type webpagesDocumentListRequest = {
    Document?: modelDocument;
    _options?: optionsQueryOptions;
    almost_due?: boolean;
    days_before_expiration?: number;
};

export type webpagesDocumentListResponse = {
    records?: modelWebpagesDocument[];
    total_count?: number;
};
