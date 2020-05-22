let device: USBDevice | null = null;

const button = document.getElementById('request');

(async () => {
  if (!button) return;
  button.onclick = async () => {
    device = await navigator.usb.requestDevice({ filters: [] });
    console.log(device);

    await device.open();
    await device.selectConfiguration(1);
    await device.claimInterface(1);

    await device.controlTransferOut({
      requestType: 'class',
      recipient: 'interface',
      request: 0x22,
      value: 0x01,
      index: 0x02
    });
  }
})();

