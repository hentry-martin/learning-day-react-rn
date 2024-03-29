export const paymentMethods = {
  "meta":{},
  "items":[
     {
        "type":"applePay",
        "psp":"braintree",
        "component":{
           "id":"BraintreeApplePay",
           "details":{
              "account":"",
              "clientToken":"eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIzYTFmMDEyMjM5YjY3NzM1NWE1MDY0YjY1ZmQwNTBjNWQ5ZDUwZDg1OTFhYjQzN2FlMTFkMTgwYTAwOTBjMzZmfGNyZWF0ZWRfYXQ9MjAxNy0wMi0yMlQxMzowNzoxMS42NTE4NjMyOTMrMDAwMFx1MDAyNm1lcmNoYW50X2FjY291bnRfaWQ9Z29ldXJvRVVSXHUwMDI2bWVyY2hhbnRfaWQ9czc2NDJjZnRmaDVzOXZrcFx1MDAyNnB1YmxpY19rZXk9Zzd3MjI0YmZncmN5ZzkyeSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImNoYWxsZW5nZXMiOlsiY3Z2Il0sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL2NsaWVudC1hbmFseXRpY3Muc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbS9zNzY0MmNmdGZoNXM5dmtwIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IkdvRXVybyBUcmF2ZWwgR21iSCIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdvZXVyb0VVUiIsImN1cnJlbmN5SXNvQ29kZSI6IkVVUiJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiczc2NDJjZnRmaDVzOXZrcCIsInZlbm1vIjoib2ZmIiwibWVyY2hhbnRBY2NvdW50SWQiOiJnb2V1cm9FVVIifQ"
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"braintree_applePay"
     },
     {
        "type":"card",
        "psp":"braintree",
        "component":{
           "id":"BraintreeCreditCard",
           "details":{
              "account":"",
              "clientToken":"eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIzYTFmMDEyMjM5YjY3NzM1NWE1MDY0YjY1ZmQwNTBjNWQ5ZDUwZDg1OTFhYjQzN2FlMTFkMTgwYTAwOTBjMzZmfGNyZWF0ZWRfYXQ9MjAxNy0wMi0yMlQxMzowNzoxMS42NTE4NjMyOTMrMDAwMFx1MDAyNm1lcmNoYW50X2FjY291bnRfaWQ9Z29ldXJvRVVSXHUwMDI2bWVyY2hhbnRfaWQ9czc2NDJjZnRmaDVzOXZrcFx1MDAyNnB1YmxpY19rZXk9Zzd3MjI0YmZncmN5ZzkyeSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImNoYWxsZW5nZXMiOlsiY3Z2Il0sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL2NsaWVudC1hbmFseXRpY3Muc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbS9zNzY0MmNmdGZoNXM5dmtwIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IkdvRXVybyBUcmF2ZWwgR21iSCIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdvZXVyb0VVUiIsImN1cnJlbmN5SXNvQ29kZSI6IkVVUiJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiczc2NDJjZnRmaDVzOXZrcCIsInZlbm1vIjoib2ZmIiwibWVyY2hhbnRBY2NvdW50SWQiOiJnb2V1cm9FVVIifQ",
              "supportedBrands":[
                 "VISA",
                 "MAESTRO",
                 "MASTER_CARD",
                 "AMEX"
              ]
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"braintree_card_notStored"
     },
     {
        "type":"card",
        "psp":"braintree",
        "component":{
           "id":"BraintreeAmexCard",
           "details":{
              "account":"",
              "clientToken":"eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIzYTFmMDEyMjM5YjY3NzM1NWE1MDY0YjY1ZmQwNTBjNWQ5ZDUwZDg1OTFhYjQzN2FlMTFkMTgwYTAwOTBjMzZmfGNyZWF0ZWRfYXQ9MjAxNy0wMi0yMlQxMzowNzoxMS42NTE4NjMyOTMrMDAwMFx1MDAyNm1lcmNoYW50X2FjY291bnRfaWQ9Z29ldXJvRVVSXHUwMDI2bWVyY2hhbnRfaWQ9czc2NDJjZnRmaDVzOXZrcFx1MDAyNnB1YmxpY19rZXk9Zzd3MjI0YmZncmN5ZzkyeSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImNoYWxsZW5nZXMiOlsiY3Z2Il0sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL2NsaWVudC1hbmFseXRpY3Muc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbS9zNzY0MmNmdGZoNXM5dmtwIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IkdvRXVybyBUcmF2ZWwgR21iSCIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdvZXVyb0VVUiIsImN1cnJlbmN5SXNvQ29kZSI6IkVVUiJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiczc2NDJjZnRmaDVzOXZrcCIsInZlbm1vIjoib2ZmIiwibWVyY2hhbnRBY2NvdW50SWQiOiJnb2V1cm9FVVIifQ",
              "supportedBrands":[
                 "AMEX"
              ]
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"braintree_card_amex",
        "fee":{
           "type":"paymentMethodFee",
           "ruleId":"bt_amex_card",
           "lowestUnitValue":200,
           "currency":"EUR"
        }
     },
     {
        "type":"paypal",
        "psp":"braintree",
        "component":{
           "id":"BraintreePayPal",
           "details":{
              "account":"",
              "clientToken":"eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIzYTFmMDEyMjM5YjY3NzM1NWE1MDY0YjY1ZmQwNTBjNWQ5ZDUwZDg1OTFhYjQzN2FlMTFkMTgwYTAwOTBjMzZmfGNyZWF0ZWRfYXQ9MjAxNy0wMi0yMlQxMzowNzoxMS42NTE4NjMyOTMrMDAwMFx1MDAyNm1lcmNoYW50X2FjY291bnRfaWQ9Z29ldXJvRVVSXHUwMDI2bWVyY2hhbnRfaWQ9czc2NDJjZnRmaDVzOXZrcFx1MDAyNnB1YmxpY19rZXk9Zzd3MjI0YmZncmN5ZzkyeSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImNoYWxsZW5nZXMiOlsiY3Z2Il0sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL2NsaWVudC1hbmFseXRpY3Muc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbS9zNzY0MmNmdGZoNXM5dmtwIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IkdvRXVybyBUcmF2ZWwgR21iSCIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdvZXVyb0VVUiIsImN1cnJlbmN5SXNvQ29kZSI6IkVVUiJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiczc2NDJjZnRmaDVzOXZrcCIsInZlbm1vIjoib2ZmIiwibWVyY2hhbnRBY2NvdW50SWQiOiJnb2V1cm9FVVIifQ"
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"braintree_paypal"
     },
     {
        "type":"googlePay",
        "psp":"braintree",
        "component":{
           "id":"BraintreeGooglePay",
           "details":{
              "account":"",
              "clientToken":"eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiIzYTFmMDEyMjM5YjY3NzM1NWE1MDY0YjY1ZmQwNTBjNWQ5ZDUwZDg1OTFhYjQzN2FlMTFkMTgwYTAwOTBjMzZmfGNyZWF0ZWRfYXQ9MjAxNy0wMi0yMlQxMzowNzoxMS42NTE4NjMyOTMrMDAwMFx1MDAyNm1lcmNoYW50X2FjY291bnRfaWQ9Z29ldXJvRVVSXHUwMDI2bWVyY2hhbnRfaWQ9czc2NDJjZnRmaDVzOXZrcFx1MDAyNnB1YmxpY19rZXk9Zzd3MjI0YmZncmN5ZzkyeSIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImNoYWxsZW5nZXMiOlsiY3Z2Il0sImVudmlyb25tZW50Ijoic2FuZGJveCIsImNsaWVudEFwaVVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9zNzY0MmNmdGZoNXM5dmtwL2NsaWVudF9hcGkiLCJhc3NldHNVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImF1dGhVcmwiOiJodHRwczovL2F1dGgudmVubW8uc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFuYWx5dGljcyI6eyJ1cmwiOiJodHRwczovL2NsaWVudC1hbmFseXRpY3Muc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbS9zNzY0MmNmdGZoNXM5dmtwIn0sInRocmVlRFNlY3VyZUVuYWJsZWQiOnRydWUsInBheXBhbEVuYWJsZWQiOnRydWUsInBheXBhbCI6eyJkaXNwbGF5TmFtZSI6IkdvRXVybyBUcmF2ZWwgR21iSCIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6ImdvZXVyb0VVUiIsImN1cnJlbmN5SXNvQ29kZSI6IkVVUiJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiczc2NDJjZnRmaDVzOXZrcCIsInZlbm1vIjoib2ZmIiwibWVyY2hhbnRBY2NvdW50SWQiOiJnb2V1cm9FVVIifQ",
              "environment":"TEST",
              "merchantId":null
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"braintree_googlePay"
     },
     {
        "type":"card",
        "psp":"devcode",
        "component":{
           "id":"DevcodeBambora",
           "details":{
              "account":"",
              "iframeUrl":"/booking-components-mocks/hostedField.html"
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"devcode_card_notStored"
     },
     {
        "type":"alipay",
        "psp":"devcode",
        "component":{
           "id":"DevcodeAlipay",
           "details":{
              "account":""
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"devcode_alipay"
     },
     {
        "type":"ideal",
        "psp":"devcode",
        "component":{
           "id":"DevcodeIdeal",
           "details":{
              "account":""
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"devcode_ideal"
     },
     {
        "type":"sofort",
        "psp":"devcode",
        "component":{
           "id":"DevcodeSofort",
           "details":{
              "account":""
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"devcode_sofort"
     },
     {
        "type":"trustly",
        "psp":"devcode",
        "component":{
           "id":"DevcodeTrustly",
           "details":{
              "account":""
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"devcode_trustly"
     },
     {
        "type":"card",
        "psp":"adyen",
        "component":{
           "id":"AdyenCard",
           "details":{
              "clientToken":"pub.v2.8215516936892793.aHR0cDovL2xvY2FsaG9zdDo3MDAw.mCDxdMyas8fpg4Sl-pEgA9TkYVmv1q8IvFVUOiiuvCM",
              "environment":"test",
              "loadingContext":"https://checkoutshopper-test.adyen.com/checkoutshopper/",
              "adyenSDKUrl":"https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.1.0/adyen.js",
              "adyenCSSUrl":"https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.1.0/adyen.css",
              "account":"",
              "supportedBrands":[
                 "VISA",
                 "MAESTRO",
                 "MASTER_CARD",
                 "AMEX",
                 "UNION_PAY"
              ]
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"adyen_card_notStored"
     },
     {
        "type":"card",
        "psp":"adyen",
        "component":{
           "id":"AdyenAmexCard",
           "details":{
              "clientToken":"pub.v2.8215516936892793.aHR0cDovL2xvY2FsaG9zdDo3MDAw.mCDxdMyas8fpg4Sl-pEgA9TkYVmv1q8IvFVUOiiuvCM",
              "environment":"test",
              "loadingContext":"https://checkoutshopper-test.adyen.com/checkoutshopper/",
              "adyenSDKUrl":"https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.1.0/adyen.js",
              "adyenCSSUrl":"https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.1.0/adyen.css",
              "account":"",
              "supportedBrands":[
                 "AMEX"
              ]
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"adyen_card_amex",
        "fee":{
           "type":"paymentMethodFee",
           "ruleId":"ad_amex_card",
           "lowestUnitValue":200,
           "currency":"EUR"
        }
     },
     {
        "type":"sofort",
        "psp":"adyen",
        "component":{
           "id":"AdyenSofort",
           "details":{
              "account":""
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"adyen_sofort"
     },
     {
        "type":"alipay",
        "psp":"adyen",
        "component":{
           "id":"AdyenAlipay",
           "details":{
              "account":""
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"adyen_alipay"
     },
     {
        "type":"trustly",
        "psp":"adyen",
        "component":{
           "id":"AdyenTrustly",
           "details":{
              "account":""
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"adyen_trustly"
     },
     {
        "type":"ideal",
        "psp":"adyen",
        "component":{
           "id":"AdyenIdeal",
           "details":{
              "clientToken":"pub.v2.8215516936892793.aHR0cDovL2xvY2FsaG9zdDo3MDAw.mCDxdMyas8fpg4Sl-pEgA9TkYVmv1q8IvFVUOiiuvCM",
              "environment":"test",
              "loadingContext":"https://checkoutshopper-test.adyen.com/checkoutshopper/",
              "adyenSDKUrl":"https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.1.0/adyen.js",
              "adyenCSSUrl":"https://checkoutshopper-test.adyen.com/checkoutshopper/sdk/3.1.0/adyen.css",
              "additionalData":[
                 {
                    "items":[
                       {
                          "id":"1121",
                          "name":"Test Issuer"
                       },
                       {
                          "id":"1154",
                          "name":"Test Issuer 5"
                       },
                       {
                          "id":"1153",
                          "name":"Test Issuer 4"
                       },
                       {
                          "id":"1152",
                          "name":"Test Issuer 3"
                       },
                       {
                          "id":"1151",
                          "name":"Test Issuer 2"
                       },
                       {
                          "id":"1162",
                          "name":"Test Issuer Cancelled"
                       },
                       {
                          "id":"1161",
                          "name":"Test Issuer Pending"
                       },
                       {
                          "id":"1160",
                          "name":"Test Issuer Refused"
                       },
                       {
                          "id":"1159",
                          "name":"Test Issuer 10"
                       },
                       {
                          "id":"1158",
                          "name":"Test Issuer 9"
                       },
                       {
                          "id":"1157",
                          "name":"Test Issuer 8"
                       },
                       {
                          "id":"1156",
                          "name":"Test Issuer 7"
                       },
                       {
                          "id":"1155",
                          "name":"Test Issuer 6"
                       }
                    ],
                    "key":"issuer",
                    "type":"select"
                 }
              ],
              "account":""
           }
        },
        "attributes":{
           "mandatoryBillingAddress":false
        },
        "paymentMethodOptionId":"adyen_ideal"
     }
  ],
  "experiments":[
     {
        "name":"SHOW_LOADING_MASK",
        "group":"CONTROL"
     },
     {
        "name":"PAYMENT_PROCESSING_INDICATOR",
        "group":"VARIANT"
     }
  ]
}