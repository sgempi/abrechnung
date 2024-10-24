import { Request as ExRequest } from 'express'
import multer from 'multer'
import { Body, Consumes, Delete, Get, Middlewares, Post, Queries, Query, Request, Route, Security, Tags } from 'tsoa'
import { Organisation as IOrganisation, _id } from '../../common/types.js'
import { documentFileHandler } from '../helper.js'
import Organisation from '../models/organisation.js'
import { Controller, GetterQuery, SetterBody } from './controller.js'

const fileHandler = multer({ limits: { fileSize: 16000000 } })

@Tags('Organisation')
@Route('organisation')
@Security('cookieAuth', ['user'])
export class OrganisationController extends Controller {
  @Get()
  public async getOrganisation(@Queries() query: GetterQuery<IOrganisation>) {
    return await this.getter(Organisation, { query, projection: { name: 1 } })
  }
}

@Tags('Admin', 'Organisation')
@Route('admin/organisation')
@Security('cookieAuth', ['admin'])
export class OrganisationAdminController extends Controller {
  @Get()
  public async getOrganisation(@Queries() query: GetterQuery<IOrganisation>) {
    return await this.getter(Organisation, { query })
  }

  @Post()
  @Middlewares(fileHandler.single('logo[data]'))
  @Consumes('multipart/form-data')
  public async postVehicleRegistration(@Body() requestBody: SetterBody<IOrganisation>, @Request() request: ExRequest) {
    await documentFileHandler(['logo'], { multiple: false, checkOwner: false })(request)
    return await this.setter(Organisation, { requestBody: requestBody, allowNew: true })
  }

  @Post('bulk')
  public async postManyProjects(@Body() requestBody: SetterBody<Omit<IOrganisation, 'logo'>>[]) {
    return await this.insertMany(Organisation, { requestBody })
  }

  @Delete()
  public async deleteOrganisation(@Query() _id: _id) {
    return await this.deleter(Organisation, { _id: _id })
  }
}
