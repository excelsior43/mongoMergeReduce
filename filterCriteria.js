function () {
    return {
        2:
        {
            filter      :       ["requestObj.accountType", "reverseFlag", "responseObj.customerName", "commandID"], 
            columnKeys  :       ["ACCOUNT_TYPE", "REVERSE_FLAG", "CUSTOMER_NAME", "COMMAND_ID"]
         }, 
        4:{ 
            filter          :       ["clientIP", "commandID", "applicationInfo1"], 
            columnKeys      :       ["CLIENT_IP", "COMMAND_ID", "APPLICATION_INFO"]
        }
     };
}
