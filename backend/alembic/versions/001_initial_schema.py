"""Initial schema

Revision ID: 001_initial_schema
Revises: 
Create Date: 2025-11-07 12:00:00.000000

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '001_initial_schema'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # Create properties table
    op.create_table(
        'properties',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('mls_number', sa.String(), nullable=True),
        sa.Column('address', sa.String(), nullable=False),
        sa.Column('city', sa.String(), nullable=False, server_default='Orlando'),
        sa.Column('state', sa.String(), nullable=False, server_default='FL'),
        sa.Column('zip_code', sa.String(), nullable=False),
        sa.Column('neighborhood', sa.String(), nullable=True),
        sa.Column('price', sa.Float(), nullable=False),
        sa.Column('bedrooms', sa.Integer(), nullable=False),
        sa.Column('bathrooms', sa.Float(), nullable=False),
        sa.Column('square_feet', sa.Integer(), nullable=True),
        sa.Column('lot_size', sa.Float(), nullable=True),
        sa.Column('year_built', sa.Integer(), nullable=True),
        sa.Column('property_type', sa.String(), nullable=False, server_default='House'),
        sa.Column('property_tax', sa.Float(), nullable=True),
        sa.Column('insurance_estimate', sa.Float(), nullable=True),
        sa.Column('hoa_fee', sa.Float(), nullable=True),
        sa.Column('status', sa.String(), nullable=False, server_default='Available'),
        sa.Column('description', sa.Text(), nullable=True),
        sa.Column('image_urls', sa.Text(), nullable=True),
        sa.Column('features', sa.Text(), nullable=True),
        sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.Column('updated_at', sa.DateTime(timezone=True), nullable=True),
        sa.Column('listed_at', sa.DateTime(timezone=True), nullable=True),
        sa.Column('sold_at', sa.DateTime(timezone=True), nullable=True),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_properties_id'), 'properties', ['id'], unique=False)
    op.create_index(op.f('ix_properties_mls_number'), 'properties', ['mls_number'], unique=True)

    # Create contact_submissions table
    op.create_table(
        'contact_submissions',
        sa.Column('id', sa.Integer(), nullable=False),
        sa.Column('name', sa.String(length=100), nullable=False),
        sa.Column('email', sa.String(length=255), nullable=False),
        sa.Column('phone', sa.String(length=20), nullable=True),
        sa.Column('message', sa.Text(), nullable=False),
        sa.Column('property_id', sa.Integer(), nullable=True),
        sa.Column('interest_type', sa.String(length=50), nullable=True),
        sa.Column('submitted_at', sa.DateTime(timezone=True), server_default=sa.func.now()),
        sa.ForeignKeyConstraint(['property_id'], ['properties.id'], ),
        sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_contact_submissions_id'), 'contact_submissions', ['id'], unique=False)
    op.create_index(op.f('ix_contact_submissions_email'), 'contact_submissions', ['email'], unique=False)


def downgrade():
    op.drop_index(op.f('ix_contact_submissions_email'), table_name='contact_submissions')
    op.drop_index(op.f('ix_contact_submissions_id'), table_name='contact_submissions')
    op.drop_table('contact_submissions')
    op.drop_index(op.f('ix_properties_mls_number'), table_name='properties')
    op.drop_index(op.f('ix_properties_id'), table_name='properties')
    op.drop_table('properties')

