export default function Delievery() {
	return (
		<div className="relative mx-auto my-20 flex max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
			<h2 className="scroll-m-20 font-hikika mx-auto pb-2 text-7xl font-semibold tracking-tight first:mt-0">
				Payment & Delivery
			</h2>
			<div className="font-raleway mt-20 gap-y-4 flex flex-col">
				<p className="font-bold">Payment by card on the website</p>
				<p>
					You can pay for your order online with Visa and MasterCard. Payment by
					card is made in the following way:
				</p>
				<ul className="list-disc gap-y-4 flex flex-col">
					<li>
						when placing an order on the website, you will be asked to choose a
						payment method.
					</li>
					<li>
						in the "Payment" column, you need to select "Visa/MasterCard".
					</li>
					<li>
						after that, you will be redirected to the page of the bank's secure
						payment system, where you will need to confirm the payment.
					</li>
				</ul>
				<p>We do not work with cash on delivery.</p>
				<p className="font-bold">
					Delivery to Nova Poshta offices throughout Ukraine
				</p>
				<div>
					With the help of Nova Poshta delivery, you can receive goods even in
					the most remote corners of Ukraine. On average, delivery takes span{' '}
					<span className="font-bold">2-5 days.</span> <br />
					In addition, order processing can take{' '}
					<span className="font-bold">5-10 days.</span> <br />
					The cost of delivery by Nova Poshta to a post office starts from{' '}
					<span className="font-bold">40 UAH.</span> <br />
					Delivery is paid at the time of ordering.
				</div>

				<p className="font-bold">International delivery</p>

				<p className="font-bold">
					Delivery abroad is carried out using Ukrposhta and Nova Poshta, the
					cost of delivery is also paid at the time of ordering.
				</p>

				<p>
					В окремих випадках вартість покупки може оплачуватись окремо, зверніть
					увагу на відповідну інформацію при оформленні замовлення.
				</p>

				<p className="font-bold">
					Період оформлення замовлень може складати 10-20 днів. Після оформлення
					вам надішлють лист на електронну пошту із трекінговим кодом для
					відстеження ( стосується лише міжнародних відправок).
				</p>
			</div>
		</div>
	);
}
