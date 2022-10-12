import { InsertCompany } from "../company"
import { initCompanyService } from "../company-service"
import { v4 as uuidv4 } from "uuid"
import { initCompanyRepository } from "../company-repository"
import { NotFoundError } from "../../../errors/errors"
import { PrismaClient } from "@dotkom/db"

describe("CompanyService", () => {
  const prisma = vi.mocked(PrismaClient, true)
  const companyRepository = initCompanyRepository(prisma)
  const companyService = initCompanyService(companyRepository)

  it("creates a new company", async () => {
    const company: InsertCompany = {
      name: "Duckmouse",
      description: "We sell computer-mouses with ducks inside of them",
      email: "coolguys@company.com",
      phone: "+47 123 45 678",
      website: "www.duckmouse.no",
      location: "Mars",
      type: "Other",
    }
    const id = uuidv4()
    vi.spyOn(companyRepository, "createCompany").mockResolvedValueOnce({ id, ...company })
    await expect(companyService.register(company)).resolves.toEqual({ id, ...company })
    expect(companyRepository.createCompany).toHaveBeenCalledWith(company)
  })

  it("fails on unknown id", async () => {
    const unknownID = uuidv4()
    vi.spyOn(companyRepository, "getCompanyByID").mockResolvedValueOnce(undefined)
    await expect(companyService.getCompany(unknownID)).rejects.toThrow(NotFoundError)
    expect(companyRepository.getCompanyByID).toHaveBeenCalledWith(unknownID)
  })
})