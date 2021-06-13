export const ValidationService = {
  validateZipCode(zipCode = ''): boolean {
    return zipCode.replace(/\D/g, '').length === 8;
  }
}
