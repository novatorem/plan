<script>
	import Tldr from '$lib/components/Tldr.svelte';
</script>

<Tldr summary="Define what makes a user and how to quantify their needs and wants." />

<div class="m-12 flex items-center text-justify justify-center">
	<article class="prose">
		<h1 id="user-centered-design">User-centered design</h1>
		<p>We&#39;ll be focused on attempting to get user feedback throughout the process.</p>
		<table>
			<thead>
				<tr>
					<th style="text-align:left">Stage</th>
					<th style="text-align:left">Methods</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="text-align:left">Needs</td>
					<td style="text-align:left"
						>User profiles, needs, scenarios, task analysis, environment, technology, work
						practices, business goals, competition, personas</td
					>
				</tr>
				<tr>
					<td style="text-align:left">Design</td>
					<td style="text-align:left"
						>Conceptual model, proposed scenarios, interaction process, interface, prototype,
						product</td
					>
				</tr>
				<tr>
					<td style="text-align:left">Build</td>
					<td style="text-align:left">Paper prototype, prototype, interface, alpha/beta, product</td
					>
				</tr>
				<tr>
					<td style="text-align:left">Evaluate</td>
					<td style="text-align:left"
						>Focus groups, usability tests, user surveys, experiments, heuristic evaluations, user
						observations</td
					>
				</tr>
			</tbody>
		</table>
		<h2 id="users-and-stakeholders">Users and Stakeholders</h2>
		<p>We&#39;ll also need to differentiate between target users and relevant stakeholders.</p>
		<ul>
			<li><strong>Users:</strong> the individuals who will be interacting with your product</li>
			<li>
				<strong>Stakeholders:</strong> people or organizations who will be affected by the system and
				who have a direct or indirect influence on system requirements
			</li>
		</ul>
		<table>
			<thead>
				<tr>
					<th style="text-align:left">Characteristic</th>
					<th style="text-align:left">Trait</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style="text-align:left">Physical</td>
					<td style="text-align:left">age, gender, size, reach, weight</td>
				</tr>
				<tr>
					<td style="text-align:left">Environmental</td>
					<td style="text-align:left">sound levels, table height, software</td>
				</tr>
				<tr>
					<td style="text-align:left">Perceptual abilities</td>
					<td style="text-align:left">hearing, vision, heat sensitivity</td>
				</tr>
				<tr>
					<td style="text-align:left">Cognitive abilities</td>
					<td style="text-align:left">memory span, reading level, tech skills</td>
				</tr>
				<tr>
					<td style="text-align:left">Personality/social traits</td>
					<td style="text-align:left">likes, preferences, patience</td>
				</tr>
				<tr>
					<td style="text-align:left">Cultural traits</td>
					<td style="text-align:left">language, symbols, dialog box flow</td>
				</tr>
				<tr>
					<td style="text-align:left">Psychological traits</td>
					<td style="text-align:left">attitude &amp; motivation, style</td>
				</tr>
				<tr>
					<td style="text-align:left">Job/role characteristics</td>
					<td style="text-align:left"
						>mandatory vs discretionary use, level of training, turnover rate, task importance</td
					>
				</tr>
			</tbody>
		</table>
		<h3 id="maslow-s-hierarchy-of-needs">Maslow&#39;s hierarchy of needs</h3>
		<p>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/MaslowHierarchy.png/800px-MaslowHierarchy.png"
				alt="Maslow&#39;s hierarchy of needs"
			/>
		</p>
		<p>
			Understand what kind of need you are fulfilling for your users. Further, make sure your design
			does not threaten a lower-level need while solving a higher level one.
		</p>

		<div class="divider" />

		<h1>Creation of Work</h1>

		<ul>
			<li>Identify the target audience/user group</li>
			<li>Outline problem space, <i>not</i> suspected problems</li>
		</ul>
	</article>
</div>
