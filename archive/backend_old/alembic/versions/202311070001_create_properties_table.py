"""create properties table"""

from alembic import op
import sqlalchemy as sa

revision = "202311070001"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "properties",
        sa.Column("id", sa.Integer(), primary_key=True, index=True),
        sa.Column("slug", sa.String(length=255), nullable=False, unique=True),
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("description", sa.Text(), nullable=True),
        sa.Column("price", sa.Numeric(12, 2), nullable=False),
        sa.Column("beds", sa.Integer(), nullable=False, server_default="0"),
        sa.Column("baths", sa.Numeric(4, 2), nullable=False, server_default="0"),
        sa.Column("square_feet", sa.Integer(), nullable=True),
        sa.Column("city", sa.String(length=120), nullable=False),
        sa.Column("state", sa.String(length=2), nullable=False),
        sa.Column("neighborhood", sa.String(length=120), nullable=True),
        sa.Column("status", sa.String(length=50), nullable=False, server_default="Available"),
        sa.Column("featured_image", sa.String(length=255), nullable=True),
        sa.Column("created_at", sa.DateTime(timezone=True), server_default=sa.func.now(), nullable=False),
        sa.Column(
            "updated_at",
            sa.DateTime(timezone=True),
            server_default=sa.func.now(),
            onupdate=sa.func.now(),
            nullable=False,
        ),
    )


def downgrade() -> None:
    op.drop_table("properties")
