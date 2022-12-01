const EcomOrderStatusLabel = {
  PROCESSING : 'Đang xử lý',
  COMPLETE : 'Hoàn tất',
  UNKNOWN_LABEL : 'Không xác định'
}

const EnumStatusNewRSA = {
  // Trạng thái 
  Processing : 1,
  Delivering : 2,
  Completed : 3,
  Failed : -3,
}

const OrderPage = {
  SUCCESS : 'success',
  FAILURE : 'failure',
  REFUND : 'refund',
  RETURN : 'return',
  PROFILE : 'profile',
  TRACKING : 'tracking',
}

module.exports ={
  EcomOrderStatusLabel,
  EnumStatusNewRSA,
  OrderPage
}