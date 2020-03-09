// const permisions = [
//     {
//       accounting_payroll: {r: true, d: true, e: true, w: true},
//       accounting_check_register: {r: true, d: true, e: true, w: true},
//       system_administration_my_settings: {r: true, d: true, e: true, w: true},
//       system_administration_user_management: {r: true, d: true, e: true, w: true},
//       accounting_approve_invoice: {r: true, d: true, e: true, w: true},
//       accounting_account_receivable: {r: true, d: true, e: true, w: true},
//       accounting_write_check: {r: true, d: true, e: true, w: true},
//       reports_historical_report: {r: true, d: true, e: true, w: true},
//       claims_vendor_management: {r: true, d: true, e: true, w: true},
//       reports_system_report: {r: true, d: true, e: true, w: true},
//       reports_approve_claim_report: {r: true, d: true, e: true, w: true},
//       system_administration_company_management: {r: true, d: true, e: true, w: true},
//       dashboard: true,
//       accounting_clear_bank_check: {r: true, d: true, e: true, w: true},
//       claims_batch_assigment: {r: true, d: true, e: true, w: true},
//       reports_excess_claim_reinsurance_report: {r: true, d: true, e: true, w: true},
//       reports_adhoc_report: {r: true, d: true, e: true, w: true},
//       system_administration_role_management: {r: true, d: true, e: true, w: true},
//       system_administration_global_contact: {r: true, d: true, e: true, w: true},
//       claims_claim_management: {r: true, d: true, e: true, w: true},
//       system_administration_document_management: {r: true, d: true, e: true, w: true},
//       accounting_print_clear_checks: {r: true, d: true, e: true, w: true},
//       claims_client_management: {r: true, d: true, e: true, w: true},
//       help: true,
//       accounting_approve_payments: {r: true, d: true, e: true, w: true},
//       system_administration_table_management: {r: true, d: true, e: true, w: true},
//     },
//     {
//         accounting_check_register: {d: true, e: true},
//       system_administration_user_management: {d: true, e: true, w: true},
//       accounting_approve_invoice: {d: true, e: true, w: true},
//       accounting_write_check: {w: true},
//       reports_system_report: {d: true, e: true, w: true},
//       accounting_accounts_receivable: {d: true, e: true, w: true},
//       reports_shared_reports: {d: true, e: true, w: true},
//       accounting_claim_financials: {d: true, e: true, w: true},
//       system_administration_company_management: {d: true, e: true, w: true},
//       accounting_clear_bank_check: {d: true, e: true, w: true},
//       claims_batch_assigment: {d: true, e: true, w: true},
//       reports_excess_claim_reinsurance_report: {d: true, w: true},
//       reports_adhoc_report: {d: true, e: true, w: true},
//       accounting_make_payment: {d: true, w: true},
//       claims_approve_claim_report: {d: true, e: true},
//       system_administration_role_management: {d: true, e: true, w: true},
//       system_administration_global_contact: {},
//       claims_claim_management: {d: true, e: true, w: true},
//       system_administration_client_management: {d: true, e: true, w: true},
//       system_administration_document_management: {d: true, e: true, w: true},
//       accounting_print_clear_checks: {d: true, e: true, w: true},
//       claims_claim_diaries: {e: true, w: true},
//       accounting_approve_payments: {d: true, e: true, w: true},
//       system_administration_table_management: {d: true, e: true, w: true},
//       system_administration_vendor_management: {d: true, e: true, w: true},
//     },
//     {
//         accounting_payroll: {d: true, e: true, w: true},
//         system_administration_vendor_management: { d: false, e: false, w: false}
//     }
//   ]
  
const permisions = [
    {
        item1: { b: true, c: true, d: true},
        item2: { b: true, c: false, d: false}
    },
    {
        item1: { g: false, f: false},
        item2: { g: false, f: true}
    },
    {
        item1: { g: true },
        item2: { i: true, g: true },
        item3: { w: true}
    }
]  
//  a: {b: true, c: true, d: true, g: true},
//  b: {b: true, g: true, f: true, i: true}
  function iterateOverRoles() {
    let payload = {};
    permisions.forEach((role, i) => {
      payload = mergeRoles(payload ,role, i);
    })
    return payload;
  }
  
  function mergeRoles(payload, role, index) {
    if (index === 0) return role;
    let auxPayload = {...payload};
    for (let i in role) {
        // i = key of the role == item1 || item2
        for (let j in role[i]) {
            // j is each prop 
            if (role[i][j] === true) {
                if (auxPayload[i]) {
                  auxPayload[i][j] = true;
                } else {
                  auxPayload[i] = {...auxPayload[i], ...{ [j] :true}};
                }
            }
        }
    }
    return auxPayload;
  }

/*
  Array of objects, each object has props, only keep the true values of each y merge all of them
*/
  
  iterateOverRoles();