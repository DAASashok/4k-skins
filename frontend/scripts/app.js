async function buySkin(skinId, skinPrice) {
  try {
    // 1. Создаём платёж
    const payment = await spw.createPayment({
      items: [{ name: `4K Skin ${skinId}`, count: 1, price: skinPrice }],
      redirectUrl: window.location.href + "?success",
      webhookUrl: "https://ваш-бэкенд.ру/spm-webhook",
      data: "user123"
    });

    window.location.href = payment.url;
  } catch (error) {
    alert("Ошибка: " + error.message);
  }
}
