const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, { 
    currency: "JPY", 
    style: "currency",
})

const formatCurrency = (number: number) => {
  return (
    CURRENCY_FORMATTER.format(number)
  )
}
export default formatCurrency