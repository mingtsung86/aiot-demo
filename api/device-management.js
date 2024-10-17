// src/api/deviceManagement.js
const Device = require('../models/Device');

async function getAllDevices() {
  try {
    return await Device.findAll();
  } catch (error) {
    console.error('Error fetching devices:', error);
    throw error;
  }
}

async function getDeviceById(id) {
  try {
    return await Device.findByPk(id);
  } catch (error) {
    console.error(`Error fetching device with id ${id}:`, error);
    throw error;
  }
}

async function createDevice(deviceData) {
  try {
    return await Device.create(deviceData);
  } catch (error) {
    console.error('Error creating device:', error);
    throw error;
  }
}

async function updateDevice(id, deviceData) {
  try {
    const device = await Device.findByPk(id);
    if (!device) {
      throw new Error('Device not found');
    }
    return await device.update(deviceData);
  } catch (error) {
    console.error(`Error updating device with id ${id}:`, error);
    throw error;
  }
}

async function deleteDevice(id) {
  try {
    const device = await Device.findByPk(id);
    if (!device) {
      throw new Error('Device not found');
    }
    await device.destroy();
    return { message: 'Device deleted successfully' };
  } catch (error) {
    console.error(`Error deleting device with id ${id}:`, error);
    throw error;
  }
}

module.exports = {
  getAllDevices,
  getDeviceById,
  createDevice,
  updateDevice,
  deleteDevice
};
