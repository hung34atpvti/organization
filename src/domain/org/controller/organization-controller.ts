import {RequestHandler} from "express";
import OrganizationService from "../service/organization-service";
import { OrganizationDocument } from "../model/organization";

export const findAll: RequestHandler = async (req, res, next) => {
    try {
        res.send(await OrganizationService.findAll());
    } catch (e) {
        next();
    }
}

export const findById: RequestHandler = async (req, res, next) => {
    try {
        const orgId: string = req?.params?.id;
        res.send(await OrganizationService.findById(orgId));
    } catch (e) {
        next();
    }
}

export const create: RequestHandler = async (req, res, next) => {
    try {
        const organizationReq = {
            name: req?.body?.name,
            description: req?.body?.description,
            address: req?.body?.address,
        } as OrganizationDocument
        res.send(await OrganizationService.create(organizationReq));
    } catch (e) {
        next();
    }
}

export const update: RequestHandler = async (req, res, next) => {
    try {
        const orgId: string = req?.params?.id;
        const organizationReq = {
            name: req?.body?.name,
            description: req?.body?.description,
            address: req?.body?.address,
        } as OrganizationDocument
        res.send(await OrganizationService.update(orgId, organizationReq));
    } catch (e) {
        next();
    }
}

export const remove: RequestHandler = async (req, res, next) => {
    try {
        const orgId: string = req?.params?.id;
        res.send(await OrganizationService.delete(orgId));
    } catch (e) {
        next();
    }
}
